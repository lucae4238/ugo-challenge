import React from "react";
import SelectDate from "./SelectDate";
import SelectDeparture from "./SelectDeparture";
import SubmitButton from "./SubmitButton";
import background from "../../../assets/hero-background.png";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardFormProps {}

export const CardForm: React.FC<CardFormProps> = () => {
  return (
    <div className="cardFormContainer d-flex" style={{ backgroundImage: `url(${background})` }}>
      <div className="container m-auto card  border position-relative">
        <div className="flex-row justify-content-between px-5 my-4 d-flex">
          <SelectDeparture />
          <SelectDate />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
};

export default CardForm;
