import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { InputLabel } from "@mui/material";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SortingComponentProps {
  sortingOptions?: SortingOptions;
  handleSortingOptions?: (type: SortingType, order: SortingOrder) => void;
}

const sortingTypes: string[] = [
  "duration-ASC",
  "duration-DESC",
  "stopOverDuration-ASC",
  "stopOverDuration-DESC",
  "stopOverAmount-ASC",
  "stopOverAmount-DESC",
  "flightScore-ASC",
  "flightScore-DESC",
  "price-ASC",
  "price-DESC"
];

export const SortingComponent: React.FC<SortingComponentProps> = ({
  sortingOptions,
  handleSortingOptions
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectOption = (e: any) => {
    if (!e) return;
    const [type, value] = e.target.id.split("-");

    handleSortingOptions?.(type, value);
  };
  return (
    <>
      <InputLabel id="sorting-flights-label">Sort by:</InputLabel>
      <Select
        value={
          sortingOptions?.type
            ? `${sortingOptions.type}-${sortingOptions.order}`
            : "flightScore-ASC"
        }
        onChange={handleSelectOption}>
        {sortingTypes?.map((item) => (
          <Option key={item} id={item} value={`${item}`}>
            {item}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SortingComponent;
