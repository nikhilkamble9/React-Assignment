import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Alan Ford
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            00005152
          </a>
        </li>
        <button type="button" className="btn btn-dark">
          Print
        </button>
      </ul>
    </div>
  );
}
