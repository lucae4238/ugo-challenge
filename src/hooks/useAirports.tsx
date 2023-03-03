import { useState } from "react";
import { searchAirportsByTerm } from "../utils";

// used to search airports by name
const useSearchAirports = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [airports, setAirports] = useState<AirportItem[]>([]);
  const [selectedAirport, setSelectedAirport] = useState<null | AirportItem>();

  const searchAirports = async (term: string) => {
    if (!term) return;
    try {
      setIsLoading(true);
      const airportIds = await searchAirportsByTerm(term);
      console.log("airportIds", airportIds);

      setAirports(airportIds);
      setIsLoading(false);
    } catch (error) {
      console.error("An error ocurred trying to fetch airports", error);
      setError(error);
    }
  };

  return {
    isLoading,
    searchAirports,
    error,
    airports,
    setSelectedAirport,
    selectedAirport
  };
};

export default useSearchAirports;
