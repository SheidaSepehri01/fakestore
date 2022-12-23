import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

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
            <Link to="/fakestore/Login">
              <FontAwesomeIcon icon={solid("user")} />
            </Link>
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
            <Link to="/fakestore">
              <FontAwesomeIcon icon={solid("house")} />
            </Link>
          </button>
        </div>

        <div>
          <button
            className="cart-btn"
            onClick={() => {
              setClicked((prevData) => ({ ...prevData, cartBtnClicked: true }));
            }}
          >
            <Link to="/fakestore/cart">
              <FontAwesomeIcon icon={solid("basket-shopping")} />
            </Link>
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
