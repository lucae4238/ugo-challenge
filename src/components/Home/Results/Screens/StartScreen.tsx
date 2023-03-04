import React from "react";
import logo from "../../../../assets/ugo-logo-lg.svg";

export const StartScreen: React.FC = () => {
  return (
    <div className="startScreen-container m-auto d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="logo" />
      <p>Your search results will be shown here</p>
    </div>
  );
};

export default StartScreen;
