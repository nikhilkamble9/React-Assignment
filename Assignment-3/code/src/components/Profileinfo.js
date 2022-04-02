import React from "react";
import "./Profileinfo.css";

export default function Profileinfo() {
  return (
    <div className="Profileinfo">
      <input type="checkbox" />
      <img
        className="profileimg"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="profile img"
      />
      <div className="info">
        <h3 className="headinginfo">Boltart Bosbessen</h3>
        <p className="profile">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          tenetur perspiciatis blanditiis nisi error optio obcaecati totam
          ratione dolorum molestiae doloremque! Excepturi reprehenderit tempora
          esse ipsa! Excepturi qui omnis ducimus?
        </p>
      </div>
    </div>
  );
}
