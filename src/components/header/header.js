import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export const Header = ({ setClicked }) => {
  return (
    <div className="header">
      <div className="nav-bar">
        <div>
          <button
            className="user-btn"
            onClick={() => {
              setClicked((prevData) => ({ ...prevData, userBtnClicked: true }));
            }}
          >
            <FontAwesomeIcon icon={solid("user")} />
          </button>
          <button
            type="close"
            className="close"
            onClick={() => {
              setClicked((prevData) => ({
                ...prevData,
                catagoryClicked: { clicked: false },
                userBtnClicked: false,
                cartBtnClicked: false,
                menuBtnClicked: false,
              }));
            }}
          >
            <FontAwesomeIcon icon={solid("house")} />
          </button>
        </div>

        <div>
          <button
            className="cart-btn"
            onClick={() => {
              setClicked((prevData) => ({ ...prevData, cartBtnClicked: true }));
            }}
          >
            <FontAwesomeIcon icon={solid("bag-shopping")} />
          </button>
          <button
            className="menu-btn"
            onClick={() => {
              setClicked((prevData) => ({
                ...prevData,
                menuBtnClicked: prevData.menuBtnClicked ? false : true,
              }));
            }}
          >
            <FontAwesomeIcon icon={solid("bars")} />
          </button>
        </div>
      </div>
    </div>
  );
};
