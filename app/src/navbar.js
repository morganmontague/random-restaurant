import React from "react";

function NavBar () {
    return (<nav className="navbar navbar-expand-md navbar-dark sticky-top bg-warning">
  <div className="container-fluid">
    <div className="navbar-brand" href="#">Store Name</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <button className="btn">Home</button>
        </li>
        <li className="nav-item">
          <button className="btn">Breakfast</button>
        </li>
        <li className="nav-item">
          <button className="btn">Brunch</button>
        </li>
        <li className="nav-item">
          <button className="btn">Lunch</button>
        </li>
        <li className="nav-item">
          <button className="btn">Appitizer</button>
        </li>
        <li className="nav-item">
          <button className="btn">Dinner</button>
        </li>
        <li className="nav-item">
          <button className="btn">Sides</button>
        </li>
        <li className="nav-item">
          <button className="btn">Dessert</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
)}


export default NavBar