import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SubmitButtonProps {}

export const SubmitButton: React.FC<SubmitButtonProps> = () => {
  const { handleGetFlights, departureAirport, departureDate, isLoadingFlights } =
    useContext(SearchFlightsContext);
  return (
    <Button
      disabled={!departureAirport || !departureDate || isLoadingFlights}
      onClick={handleGetFlights}>
      Go!
    </Button>
  );
};

export default SubmitButton;
