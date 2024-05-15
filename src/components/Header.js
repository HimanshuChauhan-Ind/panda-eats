import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnStatus, setBtnStatus] = useState("Login");

  return (
    <div className="header">
      <img className="logo" alt="App logo" src={LOGO_URL}></img>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="sign-btn"
              onClick={() =>
                btnStatus === "Login"
                  ? setBtnStatus("Logout")
                  : setBtnStatus("Login")
              }
            >
              {btnStatus}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
