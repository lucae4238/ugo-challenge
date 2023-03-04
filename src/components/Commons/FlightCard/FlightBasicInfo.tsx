import React from "react";
import { formatDate, getStopsText } from "../../../utils";

interface FlightBasicInfoProps {
  flight: FormatedFlight;
}

export const FlightBasicInfo: React.FC<FlightBasicInfoProps> = ({ flight }) => {
  return (
    <div className="flightCard-info d-flex flex-column ps-3 align-flights-start">
      <span>
        {flight.departureAirport.code} - {flight.arrivalAirport.code}
      </span>
      <span>{flight.airline.name}</span>
      <span>{getStopsText(flight.stopoversCount)}</span>
      <span>{formatDate(flight.date)}</span>
    </div>
  );
};

export default FlightBasicInfo;
