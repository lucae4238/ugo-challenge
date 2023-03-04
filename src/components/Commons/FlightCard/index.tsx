import React from "react";
import FlightBasicInfo from "./FlightBasicInfo";
import placeHolderImage from "../../../assets/card-placeholder-img.png";
import FlightDetails from "./FlightDetails";

interface FlightCardProps {
  flight: FormatedFlight;
}
export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="border mb-3 rounded">
      {/* <LikeButton/> */}
      <img
        className="flightCard-image"
        alt="placeholder-image"
        aria-hidden
        src={placeHolderImage}
      />
      <div className="flightCard-infoContainer my-4">
        <div className="flightCard-heading d-flex justify-content-between px-3 mb-1">
          <span className="flightCard-arrivalCity">{flight.arrivalCity}</span>
          <span className="flightCard-price">${Number(flight.price).toFixed(2)}</span>
        </div>
        <FlightBasicInfo flight={flight} />
      </div>
      <div className="my-3 d-flex justify-content-center">
        <FlightDetails flight={flight} />
      </div>
    </div>
  );
};

export default FlightCard;
