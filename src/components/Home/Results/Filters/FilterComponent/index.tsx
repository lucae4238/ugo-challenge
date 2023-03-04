import { FormControlLabel, Checkbox } from "@mui/material";
import React, { ChangeEvent } from "react";

interface FilterComponentProps {
  filter: [string, boolean];
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterComponent: React.FC<FilterComponentProps> = ({
  filter,
  handleCheckboxChange
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={filter[0]}
          checked={filter[1]}
          onChange={handleCheckboxChange}
          defaultChecked
        />
      }
      label={filter[0]}
    />
  );
};

export default FilterComponent;
