import React, { createContext, ReactElement, useState } from "react";
import useFlights from "../hooks/useFlights";
import { useFlightSort } from "../hooks/useFlightSort";

interface SearchFlightsContext {
  filteredFlights: FormatedFlight[];
  rawFlights: FormatedFlight[];
  isLoadingFlights: boolean;
  handleFilterOptions?: (type: string, value: boolean) => void;
  handleSortingOptions?: (type: SortingType, order: SortingOrder) => void;
  getFlightsTrigge?: () => void;
  departureDate?: string;
  departureAirport?: string;
  error?: boolean;
  setDepartureAirport?: (val: string) => void;
  setDepartureDate?: (val: string) => void;
  handleGetFlights?: () => void;
  sortingOptions?: SortingOptions;
  filterOptions?: FilterOptions;
}
export const SearchFlightsContext = createContext<SearchFlightsContext>({
  filteredFlights: [],
  rawFlights: [],
  isLoadingFlights: false
});

export const SearchFlightsProvider = ({
  children
}: {
  children: ReactElement | ReactElement[];
}) => {
  const { handleFilterOptions, handleSortingOptions, sortingOptions, filterOptions } =
    useFlightSort();
  const { getFlightsTrigger, filteredFlights, rawFlights, isLoadingFlights, error } = useFlights(
    filterOptions,
    sortingOptions
  );
  const [departureDate, setDepartureDate] = useState<string>("");
  const [departureAirport, setDepartureAirport] = useState<string>("");
  const handleGetFlights = () => {
    getFlightsTrigger(departureAirport || "LAX", departureDate || "2023-03-13");
  };
  return (
    <SearchFlightsContext.Provider
      value={{
        error,
        filteredFlights,
        rawFlights,
        isLoadingFlights,
        handleFilterOptions,
        handleSortingOptions,
        handleGetFlights,
        sortingOptions,
        filterOptions,
        departureDate,
        departureAirport,
        setDepartureAirport,
        setDepartureDate
      }}>
      {children}
    </SearchFlightsContext.Provider>
  );
};
