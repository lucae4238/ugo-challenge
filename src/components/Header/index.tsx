import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <span>logoo</span>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              About
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            search iata
          </button>
          <button type="button" className="btn btn-primary">
            get related airports
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
