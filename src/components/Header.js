import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt="App logo" src={LOGO_URL}></img>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
