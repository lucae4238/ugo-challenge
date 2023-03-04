import { sortingDictionary } from "./constants";

const APIKEY = `${process.env.REACT_APP_API_KEY}`;
//function used to display results to select in input
export const searchAirportsByTerm = async (
  term: string
): Promise<AirportItem[] | FunctionError> => {
  try {
    if (!term) throw Error("No Term Found");
    //fetch airports
    const response: SearchAirportResponse = await (
      await fetch(`https://api.flightapi.io/iata/${APIKEY}?name=${term}&type=airport`)
    ).json();

    if (response?.message) {
      throw Error(response.message);
    }

    return (
      response?.data?.map(({ iata, name }) => ({
        iata,
        name
      })) ?? []
    );
  } catch (message) {
    console.error("An Error ocurred while fetching airports", message);
    return { error: true, message: message };
  }
};

const getAirportIdsFromSchedule = (data: AirportScheduleResponse) => {
  return (
    data?.airport?.pluginData?.schedule?.departures?.data
      ?.map((item) => item.flight.airport.destination.code.iata)
      ?.slice(0, 3) || []
  );
};

//function used to fetch the airports IATA (id) that will be used as arrival airports
export const getReleatedAirportsIds = async (airportId: string, date: string) => {
  try {
    const day = getDaysTillDate(new Date(date));

    const data: AirportScheduleResponse = await (
      await fetch(
        `https://api.flightapi.io/schedule/${APIKEY}?mode=departures&day=${day}&iata=${airportId}`
      )
    ).json();
    if (data.message) {
      throw Error(data.message);
    }

    const airportIds = getAirportIdsFromSchedule(data);
    if (!airportIds) return [];

    return airportIds;
  } catch (error) {
    console.error("An Error ocurred while fetching airports", error);
    return [];
  }
};

const flightDataFormatter = (
  flightApiResponse: OneWayTripResponse,
  additionalInfo: FlightFormatterAdditionalInfo
): FormatedFlight[] => {
  const { arrivalAirport, arrivalCity, departureAirport, selectedDate } = additionalInfo;
  return flightApiResponse.legs
    .map((flight, index) => {
      if (index > 11) return;
      const airline = flightApiResponse.airlines?.find(
        (airline) => airline.code === flight.airlineCodes[0]
      );
      const trip = flightApiResponse.trips?.find((trip) => trip?.legIds?.[0] === flight.id);
      const price = flightApiResponse.fares?.find((fare) => fare.tripId === trip?.id);
      if (!price || !trip || !airline) {
        return console.error("couldnt find info for leg ", flight.id);
      }
      return {
        ...flight,
        legId: flight.id,
        id: trip.id,
        code: trip.code,
        arrivalAirport,
        departureAirport,
        price: price.price.totalAmountUsd,
        airline,
        date: selectedDate,
        arrivalCity: arrivalCity.name
      } as FormatedFlight;
    })
    .filter(Boolean) as FormatedFlight[];
};

export const searchFlights = async (
  departureIata: string,
  arrivalIata: string,
  selectedDate: string
): Promise<FormatedFlight[] | ApiErrorResponse> => {
  try {
    const flightData: OneWayTripResponse = await (
      await fetch(
        `https://api.flightapi.io/onewaytrip/${APIKEY}/${departureIata}/${arrivalIata}/${selectedDate}/1/0/0/Economy/USD`
      )
    ).json();
    if (flightData.message) {
      return flightData;
    }
    const arrivalAirport = flightData.search.legs[0].arrivalAirport;
    const departureAirport = flightData.search.legs[0].departureAirport;
    const arrivalCity = flightData.cities?.find((city) => arrivalAirport.cityCode === city.code);
    if (!selectedDate || !arrivalCity || !arrivalAirport || !departureAirport) {
      throw Error("AdditionalInfo was missing");
    }
    return flightDataFormatter(flightData, {
      selectedDate,
      arrivalCity,
      arrivalAirport,
      departureAirport
    });
  } catch (error) {
    console.error("error", error);
    return { error: true, message: `${error}` } as ApiErrorResponse;
  }
};

export const searchAllFlightsFromArrivalList = async (
  departureIata: string,
  relatedIatas: string[],
  selectedDate: string
) => {
  let anyErrors = false;
  let allFlights: FormatedFlight[] = [];
  for await (const airportId of relatedIatas) {
    try {
      const flightsData = await searchFlights(departureIata, airportId, selectedDate);
      if (flightsData && Array.isArray(flightsData)) {
        allFlights = [...flightsData, ...allFlights];
      } else {
        anyErrors = true;
      }
    } catch (error) {
      console.error("error", error);
    }
  }
  if (anyErrors && allFlights.length === 0) return { error: true };
  return allFlights;
};

export const getRawFlights = async (departureIata: string, date: string) => {
  const relatedAirportIds = await getReleatedAirportsIds(departureIata, date);
  const randomFlights = await searchAllFlightsFromArrivalList(
    departureIata,
    relatedAirportIds,
    date
  );
  return randomFlights;
};

export const getFilteredFlights = (
  flights: FormatedFlight[],
  filterOptions: FilterOptions,
  sortingOptions: SortingOptions
) => {
  const filteredFlights = flights.filter((selectedFlight) =>
    isValidFlight(selectedFlight, filterOptions)
  );

  return handleFlightSorting(filteredFlights, sortingOptions);
};

const handleFlightSorting = (flights: FormatedFlight[], sortinOptions: SortingOptions) => {
  return sortByKey(flights, sortingDictionary[sortinOptions.type], sortinOptions.order);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sortByKey(rawFlights: any[], by: string, order: "ASC" | "DESC") {
  return rawFlights.sort(function (a, b) {
    const itemA = a[by];
    const itemB = b[by];
    // if (order === "ASC") return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    if (order === "ASC") return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    return itemA > itemB ? -1 : itemA < itemB ? 1 : 0;
  });
}

const isValidFlight = (flight: FormatedFlight, filters: FilterOptions) => {
  return true || (flight && filters);
  // return (
  //   flight.overnight === filters.overnight &&
  //   flight.shortStopover === filters.shortStopover &&
  //   filters.noStops === (flight.stopoversCount === 0)
  // );
};

export const formatDate = (date: string) => {
  const fullDateString = `${new Date(date).toUTCString()}`; //Sun, Jan 8 2023
  return fullDateString.split(" ").slice(0, 3).join(" "); //remove year
};

const getDaysTillDate = (date_1: Date) => {
  const today = new Date();
  const difference = date_1.getTime() - today.getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays + 2; // add 1 because API takes today as 1
};

export const getStopsText = (stopsNumber: number) => {
  if (stopsNumber === 0) return "No Stops";
  if (stopsNumber === 1) return "1 Stop";
  return `${stopsNumber} stops`;
};
