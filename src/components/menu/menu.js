import React from "react";
import "./menu.css";
export const Menu = ({ setClicked, clicked, themeBtn }) => {
  return (
    <div
      className="menu-container"
      style={{ display: clicked ? "block" : "none" }}
    >
      <ul className="menu-items">
        <li>
          <button
            type="theme"
            className={themeBtn === "day" ? 'theme night' : 'theme day'}
            onClick={() =>
              themeBtn === "day"
                ? setClicked((prev) => ({
                    ...prev,
                    themeBtn: "night",
                  }))
                : setClicked((prev) => ({
                    ...prev,
                    themeBtn: "day",
                  }))
            }
          >
            {themeBtn === "day" ? 'night' : 'day'}
          </button>
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
