import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Autocomplete, AutocompleteChangeReason, TextField } from "@mui/material";
import useAirports from "../../../../hooks/useAirports";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SelectDepartureProps {}

//TODO see loading
export const SelectDeparture: React.FC<SelectDepartureProps> = () => {
  const { setDepartureAirport } = useContext(SearchFlightsContext);
  const { isLoading, searchAirports, error, airports } = useAirports();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (_e: SyntheticEvent<Element, Event>, inputValue: string) => {
    if (inputValue === searchTerm) return;
    console.log("se cambia value", { old: searchTerm, new: inputValue });
    setSearchTerm(inputValue || "");
  };

  const handleOnChange = (
    _e: SyntheticEvent<Element, Event>,
    value: AirportItem | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption" && value) {
      console.log("se selecciona la opcion", value);
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
      console.log("se ejecuta la busqueda");
      searchAirports(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handleFetchingAirports);
    };
  }, [searchTerm]);

  return (
    <div className="container border">
      <p>From where do you travel</p>
      <Autocomplete
        noOptionsText={error ? "An error has ocurred" : "No Airports found"}
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
  );
};

export default SelectDeparture;
