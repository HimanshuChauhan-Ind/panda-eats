import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnStatus, setBtnStatus] = useState("Login");

  return (
    <div className="flex justify-between shadow-md">
      <img className="w-32 mx-4" alt="App logo" src={LOGO_URL}></img>
      <div className="flex">
        <ul className="flex px-4 items-center">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4">Cart</li>
          <li className="mx-4">
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
