import React from "react";
import { Link } from "react-router-dom";
import "./user-page.css";
export const UserPage = ({ clicked, setClicked }) => {
  return (
    <div
      className="user-container"
      style={{ display: clicked ? "block" : "none" }}
    >
    <Link to="/fakestore">
    <button
        className="close"
        type="close"
        onClick={() => {
          setClicked((prevData) => ({
            ...prevData,
            userBtnClicked: false,
            cartBtnClicked: false,
            menuBtnClicked: false,
          }));
        }}
      >
        X
      </button>
    </Link>
    
      <div className="signin-box">
        <h2>sign in</h2>
        <div className="input-box">
          <label>Email</label>
          <input type={"email"} required={"required"} />
        </div>
        <div className="input-box">
          <label>password</label>
          <input type={"password"} required={"required"} />
        </div>
        <input className="submit" type={"submit"} value={"sign in"} />
      </div>
    </div>
  );
};
