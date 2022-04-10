import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <p className="navtext">🧿 InstaClone</p>
      </div>
      <div className="img">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-i2yjvo"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PhotoCameraRoundedIcon"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
        </svg>
      </div>
    </div>
  );
}
