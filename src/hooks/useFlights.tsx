import { useEffect, useState } from "react";
import { getFilteredFlights, getRawFlights } from "../utils";

//used to fetch flights and sort/filter
const useFlights = (filterOptions: FilterOptions, sortingOptions: SortingOptions) => {
  const [isLoadingFlights, setIsLoadingFlights] = useState(false);
  const [rawFlights, setRawFlights] = useState<FormatedFlight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<FormatedFlight[]>([]);
  const [error, setError] = useState(false);

  const getFlightsTrigger = async (departureIata: string, date: string) => {
    try {
      setIsLoadingFlights(true);
      setError(false);
      const flights = await getRawFlights(departureIata, date);
      if (Array.isArray(flights)) {
        setRawFlights(flights);
      } else setError(true);
    } catch (error) {
      setError(true);
      console.error("error", error);
    }
  };

  useEffect(() => {
    try {
      setFilteredFlights(getFilteredFlights(rawFlights, filterOptions, sortingOptions));
      setIsLoadingFlights(false);
    } catch (error) {
      console.error("error", error);
      setError(true);
    }
  }, [sortingOptions, filterOptions, rawFlights]);

  return {
    error,
    getFlightsTrigger,
    filteredFlights,
    isLoadingFlights,
    rawFlights
  };
};
export default useFlights;
