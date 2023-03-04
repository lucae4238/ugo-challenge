import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import FlightBasicInfo from "./FlightBasicInfo";
import placeholderImg from "../../../assets/details-placeholder-img.png";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FlightDetailsProps {
  flight: FormatedFlight;
}

export const FlightDetails: React.FC<FlightDetailsProps> = ({ flight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleButton = () => setIsOpen((prev) => !prev);
  return (
    <>
      <Button onClick={handleButton} variant="contained">
        Details
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <div className="container card flightDetailsModal-container p-4 d-flex flex-column ">
          <p>Flight details</p>
          <div className="flightDetailsModal-infoContainer d-flex">
            <div className="flightDetailsModal-leftColumn me-5">
              <div className="flightDetailsModal-imageContainer mb-5">
                <img src={placeholderImg} />
              </div>
              <Button variant="contained" size="large">
                Like this Flight
              </Button>
            </div>

            <div className="container card justify-content-around">
              <div className="flightDetailsModal-section mb-3 d-flex flex-column">
                <p className="flightDetailsModal-title">
                  To {flight.arrivalCity} ({flight.arrivalAirport.code})
                </p>
                <FlightBasicInfo flight={flight} />
              </div>
              <div className="flightDetailsModal-section d-flex flex-column">
                <p className="flightDetailsModal-title">Time</p>
                <p>Departure time: {flight.departureTime}</p>
                <p>Expected arrival time: {flight.arrivalTime}</p>
                <p>Stop time: {flight.stopoverDurationMinutes}m</p>
              </div>
              <p className="flightDetailsModal-price">${Number(flight.price).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FlightDetails;
