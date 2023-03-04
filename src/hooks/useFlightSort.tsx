import { useState } from "react";

//used to handle sorting/filtering
export const useFlightSort = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    noStops: true,
    overnight: true,
    longStopover: true,
    shortStopover: true
  });

  const [sortingOptions, setSortingOptions] = useState<SortingOptions>({
    type: "flightScore",
    order: "ASC"
  });

  const handleFilterOptions = (type: string, value: boolean) => {
    setFilterOptions((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSortingOptions = (type: SortingType, order: SortingOrder) => {
    setSortingOptions({
      type,
      order
    });
  };

  return {
    handleFilterOptions,
    handleSortingOptions,
    sortingOptions,
    filterOptions
  };
};
