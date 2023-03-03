import { useEffect, useState } from "react";
import { getFilteredFlights, getRandomFlights } from "../utils";

//used to fetch flights and sort/filter
const useFlights = (filterOptions: FilterOptions, sortingOptions: SortingOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomFlights, setRandomFlights] = useState<any[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<any[]>([]);

  const getRandomFlightsTrigger = async (departureIata: string, date: string) => {
    try {
      setIsLoading(true);
      const flights = await getRandomFlights(departureIata, date);
      setRandomFlights(flights);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    setFilteredFlights(getFilteredFlights(randomFlights, filterOptions, sortingOptions));
    setIsLoading(false);
  }, [sortingOptions, filterOptions, randomFlights]);

  return {
    getRandomFlightsTrigger,
    filteredFlights,
    isLoading
  };
};
export default useFlights;
