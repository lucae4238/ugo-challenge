import { useEffect, useState } from "react";
import { getFilteredFlights, getRawFlights } from "../utils";

//used to fetch flights and sort/filter
const useFlights = (filterOptions: FilterOptions, sortingOptions: SortingOptions) => {
  const [isLoadingFlights, setIsLoadingFlights] = useState(false);
  const [rawFlights, setRawFlights] = useState<any[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<any[]>([]);

  const getFlightsTrigger = async (departureIata: string, date: string) => {
    try {
      setIsLoadingFlights(true);
      const flights = await getRawFlights(departureIata, date);
      setRawFlights(flights);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    setFilteredFlights(getFilteredFlights(rawFlights, filterOptions, sortingOptions));
    setIsLoadingFlights(false);
  }, [sortingOptions, filterOptions, rawFlights]);

  return {
    getFlightsTrigger,
    filteredFlights,
    isLoadingFlights,
    rawFlights
  };
};
export default useFlights;
