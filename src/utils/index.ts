const APIKEY = "63ffe1c92f0391f4387cc1fa";

export const searchAirportsByTerm = async (term: string): Promise<AirportItem[]> => {
  try {
    if (!term) throw Error("No Term Found");
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
  } catch (error) {
    console.error("An Error ocurred while fetching airports", error);
    return [];
  }
};

export const getReleatedAirportsIds = async (airportId: string) => {
  try {
    const data: AirportScheduleResponse = await (
      await fetch(
        `https://api.flightapi.io/schedule/${APIKEY}?mode=departures&day=3&iata=${airportId}`
      )
    ).json();
    console.log("data", data);
    const airports = data?.airport?.pluginData?.schedule?.departures?.data?.map(
      (item) => item.flight.airport.destination.code.iata
    );
    console.log("airports", airports);
    if (!airports) return [];

    const usedAirports = airports.slice(0, 10);
    return usedAirports;
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
  const flightData = await (
    await fetch(
      `https://api.flightapi.io/onewaytrip/${APIKEY}/${departureIata}/${arrivalIata}/${selectedDate}/1/0/0/Economy/USD`
    )
  ).json();
  //format flightData

  return flightData;
};

//TODO other name
export const searchAllFlightsFromIatas = async (
  departureIata: string,
  relatedIatas: string[],
  selectedDate: string
) => {
  const allFlights: any[] = [];
  for await (const airportId of relatedIatas) {
    console.log("start looking for data of ", airportId);
    const flightsData = await searchFlights(departureIata, airportId, selectedDate);
    console.log("flightData", flightsData);
    return allFlights.concat(flightsData);
  }

  return allFlights;
};

export const getRandomFlights = async (departureIata: string, date: string) => {
  const relatedAirportIds = await getReleatedAirportsIds(departureIata);
  const randomFlights = searchAllFlightsFromIatas(departureIata, relatedAirportIds, date);
  return randomFlights;
};

export const getFilteredFlights = (
  flights: any[],
  filterOptions: FilterOptions,
  sortingOptions: SortingOptions
) => {
  const filteredFlights = flights.filter((selectedFlight) =>
    isValidFlights(selectedFlight, filterOptions)
  );

  return handleFlightSorting(filteredFlights, sortingOptions);
};

//TODO
const handleFlightSorting = (flights: any[], sortinOptions: SortingOptions) => {
  return flights;
};

//TODO naming
const isValidFlights = (flight: any, filters: FilterOptions) => {
  const arrayOfFilters = Object.entries(filters);

  return !arrayOfFilters.some((filter) => flight[filter[0]] === filter[1]);
};
