import React, { useContext, useState } from "react";
import Input from "@mui/material/Input";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";
const ariaLabel = { "aria-label": "description" };

interface SelectDateProps {
  test?: true;
}

export const SelectDate: React.FC<SelectDateProps> = () => {
  const { setDepartureDate } = useContext(SearchFlightsContext);
  const [dateInput, setDateInput] = useState<null | string>(""); //start as today in yyyy/mm/dd

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (dateInput === value) return;
    setDateInput(value);
    setDepartureDate?.(value);
  };

  return (
    <div className="container border">
      <Input value={dateInput} onChange={handleOnChange} type={"date"} inputProps={ariaLabel} />
    </div>
  );
};

export default SelectDate;
