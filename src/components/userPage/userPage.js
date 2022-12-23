import React,{useContext} from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { Link } from "react-router-dom";
import "./user-page.css";

export const UserPage = ({ clicked, setClicked }) => {
  const themeBtn = useContext(ThemeContext)

  return (
    <div
      className={themeBtn ==='night' ? 'user-container night':'user-container'}
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
        <button className="submit" type={"submit"}>submit</button>
      </div>
    </div>
  );
};
