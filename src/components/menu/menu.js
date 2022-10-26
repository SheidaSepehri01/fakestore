import React from "react";
import "./menu.css";
export const Menu = ({ setClicked, clicked }) => {
  return (
    <div
      className="menu-container"
      style={{ display: clicked ? "block" : "none" }}
    >
  
      <ul className="menu-items">
        <li>
          <button type="theme" className="theme">
            night
          </button>{" "}
        </li>

        <li>
          <a>orders</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>support</a>
        </li>
        <li>
          <a>About us</a>
        </li>
      </ul>
    </div>
  );
};
