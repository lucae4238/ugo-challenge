import React, { useContext, useMemo } from "react";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";
import FilterComponent from "./FilterComponent";
import SortingComponent from "./SortingComponent";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FiltersProps {}

export const Filters: React.FC<FiltersProps> = () => {
  const { handleSortingOptions, handleFilterOptions, sortingOptions, filterOptions } =
    useContext(SearchFlightsContext);
  const filterEntries = useMemo(
    () => (filterOptions ? Object.entries(filterOptions) : []),
    [filterOptions]
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    handleFilterOptions?.(name, checked);
  };

  return (
    <div>
      <div>
        {filterEntries.map((filter) => (
          <React.Fragment key={filter[0]}>
            <FilterComponent filter={filter} handleCheckboxChange={handleCheckboxChange} />
          </React.Fragment>
        ))}
        <SortingComponent
          sortingOptions={sortingOptions}
          handleSortingOptions={handleSortingOptions}
        />
      </div>
    </div>
  );
};

export default Filters;
