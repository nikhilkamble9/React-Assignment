import React from "react";
import { Link } from "react-router-dom";
import "./Firstpage.css";

export default function Firstpage() {
  return (
    <div className="Firstpage">
      <div className="image">
        <img src="../Images/man-walking-dog.jpg" alt="img" />
      </div>
      <div className="textContainer">
        <p className="nameTag">10X React Assignment</p>
        <Link to="/post">
          <button className="enterbtn">Enter</button>
        </Link>
      </div>
    </div>
  );
}
