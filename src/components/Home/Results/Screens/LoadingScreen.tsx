import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import logo from "../../../../assets/ugo-logo-lg.svg";

export const LoadingScreen: React.FC = () => {
  return (
    <div className="startScreen-container m-auto d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="logo" />
      <CircularProgress />
    </div>
  );
};

export default LoadingScreen;
