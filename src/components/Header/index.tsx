import React from "react";
import logo from "../../assets/ugo-logo-sm.svg";

export const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={logo} />
        </a>

        <div className="col-md-3 text-end">
          <button
            type="button"
            onClick={() => (location.href = "/")}
            className="btn btn-outline-primary me-2">
            Search
          </button>
          <button type="button" className="btn btn-primary">
            Liked
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
