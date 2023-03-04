import { useState } from "react";
import { searchAirportsByTerm } from "../utils";

// used to search airports by name
const useSearchAirports = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [airports, setAirports] = useState<AirportItem[]>([]);

  const searchAirports = async (term: string) => {
    if (!term) return;
    try {
      setError(false);
      setIsLoading(true);
      const airportIds = await searchAirportsByTerm(term);
      if (Array.isArray(airportIds)) {
        setAirports(airportIds);
        setIsLoading(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("An error ocurred trying to fetch airports", error);
      setError(true);
    }
  };

  return {
    isLoading,
    searchAirports,
    error,
    airports
  };
};

export default useSearchAirports;
