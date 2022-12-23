import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { solid , regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./menu.css";

export const Menu = ({ setClicked, clicked }) => {

  const themeBtn = useContext(ThemeContext) 

  return (
    <div
      className={themeBtn === 'night' ? "night menu-container":"menu-container" }
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
            {themeBtn === "day" ? 
            <FontAwesomeIcon icon={regular("moon")} />
             :
            <FontAwesomeIcon icon={solid("sun")} />
             }
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
