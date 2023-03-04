import React from "react";
import logo from "../../../../assets/ugo-logo-lg.svg";

export const ErrorScreen: React.FC = () => {
  return (
    <div className="startScreen-container m-auto d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="logo" />
      <p>An error ocurred fetching your flights, please try again later.</p>
    </div>
  );
};

export default ErrorScreen;
