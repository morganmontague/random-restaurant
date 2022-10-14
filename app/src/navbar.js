import React from "react";
import App from "./App";

function NavBar(props) {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark sticky-top font-family: 'Inter', sans-serif;
    "
      id="headerBox"
    >
      <div className="container-fluid">
        <div className="navbar-brand">Store Name</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Breakfast
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Brunch
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Lunch
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Appetizer
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Dinner
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Side
              </button>
            </li>
            <li className="nav-item">
              <button className="btn text-white" onClick={props.handleClick}>
                Dessert
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
