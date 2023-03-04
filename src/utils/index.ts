//TODO .env
const APIKEY = "6402bca65aff273b2060f3ff";

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
    console.log("response", response);

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
      ?.slice(0, 15) || []
  );
};

//function used to fetch the airports IATA (id) that will be used as arrival airports
export const getReleatedAirportsIds = async (airportId: string, date: string) => {
  try {
    const day = "3"; //TODO getDaysTillDate(date)

    console.log("date", date);

    const data: AirportScheduleResponse = await (
      await fetch(
        `https://api.flightapi.io/schedule/${APIKEY}?mode=departures&day=${day}&iata=${airportId}`
      )
    ).json();
    if (data.message) {
      throw Error(data.message);
    }

    console.log("data", data);
    const airportIds = getAirportIdsFromSchedule(data);
    if (!airportIds) return [];

    return airportIds;
  } catch (error) {
    console.error("An Error ocurred while fetching airports", error);
    return [];
  }
};

export const searchFlights = async (
  departureIata: string,
  arrivalIata: string,
  selectedDate: string
) => {
  try {
    const flightData = await (
      await fetch(
        `https://api.flightapi.io/onewaytrip/${APIKEY}/${departureIata}/${arrivalIata}/${selectedDate}/1/0/0/Economy/USD`
      )
    ).json();
    //TODO format flightData

    return flightData;
  } catch (error) {
    console.error("error", error);
    return;
  }
};

export const searchAllFlightsFromArrivalList = async (
  departureIata: string,
  relatedIatas: string[],
  selectedDate: string
) => {
  const allFlights: any[] = [];
  for await (const airportId of relatedIatas) {
    try {
      console.log("start looking for data of ", airportId);
      const flightsData = await searchFlights(departureIata, airportId, selectedDate);
      console.log("flightData", flightsData);
      if (flightsData && !flightsData.message) {
        allFlights.concat(flightsData);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  return allFlights;
};

export const getRawFlights = async (departureIata: string, date: string) => {
  const relatedAirportIds = await getReleatedAirportsIds(departureIata, date);
  const randomFlights = searchAllFlightsFromArrivalList(departureIata, relatedAirportIds, date);
  return randomFlights;
};

export const getFilteredFlights = (
  flights: any[],
  filterOptions: FilterOptions,
  sortingOptions: SortingOptions
) => {
  const filteredFlights = flights.filter((selectedFlight) =>
    isValidFlight(selectedFlight, filterOptions)
  );

  return handleFlightSorting(filteredFlights, sortingOptions);
};

const handleFlightSorting = (flights: any[], sortinOptions: SortingOptions) => {
  //TODO
  if (flights.length > 100000) console.log(sortinOptions);
  return flights;
};

const isValidFlight = (flight: any, filters: FilterOptions) => {
  const arrayOfFilters: [string, boolean][] = Object.entries(filters); // [[isOvernight, true], [hasStops, true]]
  return !arrayOfFilters.some((filter) => flight[filter[0]] === filter[1]);
};
