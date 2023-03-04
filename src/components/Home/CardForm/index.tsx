import React from "react";
import SelectDate from "./SelectDate";
import SelectDeparture from "./SelectDeparture";
import SubmitButton from "./SubmitButton";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardFormProps {}

export const CardForm: React.FC<CardFormProps> = () => {
  return (
    <div className="container justify-content-between d-flex border">
      <SelectDeparture />
      <SelectDate />
      <SubmitButton />
    </div>
  );
};

export default CardForm;
