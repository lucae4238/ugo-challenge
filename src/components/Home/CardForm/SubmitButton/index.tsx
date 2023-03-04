import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { SearchFlightsContext } from "../../../../Context/SearchFlightsContext";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SubmitButtonProps {}

export const SubmitButton: React.FC<SubmitButtonProps> = () => {
  const { handleGetFlights, departureAirport, departureDate, isLoadingFlights } =
    useContext(SearchFlightsContext);
  return (
    <div className="postition-absolute searchFlightsButton">
      <Button
        disabled={!departureAirport || !departureDate || isLoadingFlights}
        variant="contained"
        onClick={handleGetFlights}>
        Go!
      </Button>
    </div>
  );
};

export default SubmitButton;
