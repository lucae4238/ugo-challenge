import React, { useContext, useState } from "react";
import Input from "@mui/material/Input";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";
import calendar from "../../../../assets/calendar.svg";
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
    <div className="my-4 container ms-3 d-flex selectDate-container  justify-content-start">
      <div className="d-flex justify-content-center flex-column text-center">
        <div className="mb-1 d-flex items-center">
          <p className="m-0">When do u wish to travel</p>
          <img className="ms-3" alt="calendar" src={calendar} />
        </div>
        <Input value={dateInput} onChange={handleOnChange} type={"date"} inputProps={ariaLabel} />
      </div>
    </div>
  );
};

export default SelectDate;
