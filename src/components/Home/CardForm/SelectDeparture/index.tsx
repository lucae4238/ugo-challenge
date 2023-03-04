import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Autocomplete, AutocompleteChangeReason, TextField } from "@mui/material";
import useAirports from "../../../../hooks/useAirports";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";
import plain from "../../../../assets/plain.svg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SelectDepartureProps {}

//TODO see loading
export const SelectDeparture: React.FC<SelectDepartureProps> = () => {
  const { setDepartureAirport } = useContext(SearchFlightsContext);
  const { isLoading, searchAirports, error, airports } = useAirports();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (_e: SyntheticEvent<Element, Event>, inputValue: string) => {
    if (inputValue === searchTerm) return;
    setSearchTerm(inputValue || "");
  };

  const handleOnChange = (
    _e: SyntheticEvent<Element, Event>,
    value: AirportItem | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption" && value) {
      setDepartureAirport?.(value.iata);
    }
  };

  useEffect(() => {
    if (error) {
      setSearchTerm("");
    }
  }, [error]);

  //TODO optimization if possible
  useEffect(() => {
    if (!searchTerm) return;
    const handleFetchingAirports = setTimeout(() => {
      //avoid fetching when selecting value from list of already fetched airports
      if (airports.find((item) => item.name === searchTerm)) return;
      searchAirports(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handleFetchingAirports);
    };
  }, [searchTerm]);

  return (
    <div className="my-4 container me-3 d-flex  justify-content-end selectDeparture-container">
      <div className="d-flex justify-content-center flex-column text-center">
        <div className="mb-1 d-flex items-center">
          <p className="m-0">From where do you travel</p>
          <img className="ms-3" src={plain} alt={"plain"} />
        </div>
        <Autocomplete
          noOptionsText={
            error ? "An error has ocurred" : searchTerm ? "No Airports found" : "Start searching"
          }
          inputValue={searchTerm}
          onInputChange={handleInputChange}
          onChange={handleOnChange}
          getOptionLabel={(option) => option.name} //logic to render labels
          loading={!error && isLoading}
          disablePortal
          id="airports-input"
          options={airports}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} error={!!error} label={"Search an Airport"} />
          )}
        />
      </div>
    </div>
  );
};

export default SelectDeparture;
