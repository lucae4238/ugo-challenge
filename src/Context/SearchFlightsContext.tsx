import React, { createContext, useState } from "react";
import useFlights from "../hooks/useFlights";
import { useFlightSort } from "../hooks/useFlightSort";

interface SearchFlightsContext {
  filteredFlights: any[];
  rawFlights: any[];
  isLoadingFlights: boolean;
  handleFilterOptions?: (type: string, value: boolean) => void;
  handleSortingOptions?: (type: SortingType, order: SortingOrder) => void;
  getFlightsTrigge?: () => void;
  departureDate?: string;
  departureAirport?: string;
  setDepartureAirport?: (val: string) => void;
  setDepartureDate?: (val: string) => void;
  handleGetFlights?: () => void;
}
export const SearchFlightsContext = createContext<SearchFlightsContext>({
  filteredFlights: [],
  rawFlights: [],
  isLoadingFlights: false
});

export const SearchFlightsProvider = ({ children }: any) => {
  const { handleFilterOptions, handleSortingOptions, sortingOptions, filterOptions } =
    useFlightSort();
  const { getFlightsTrigger, filteredFlights, rawFlights, isLoadingFlights } = useFlights(
    filterOptions,
    sortingOptions
  );
  const [departureDate, setDepartureDate] = useState<string>("");
  const [departureAirport, setDepartureAirport] = useState<string>("");
  const handleGetFlights = () => {
    getFlightsTrigger(departureAirport || "LAX", departureDate || "2023-04-04");
  };
  return (
    <SearchFlightsContext.Provider
      value={{
        filteredFlights,
        rawFlights,
        isLoadingFlights,
        handleFilterOptions,
        handleSortingOptions,
        handleGetFlights,
        departureDate,
        departureAirport,
        setDepartureAirport,
        setDepartureDate
      }}>
      {children}
    </SearchFlightsContext.Provider>
  );
};
