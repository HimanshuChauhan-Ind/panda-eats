import React from "react";
import ReactDOM from "react-dom/client";

/*
    Header
        Logo
        Navlinks
            home
            about us
            contact us
            cart
    Body
        search
        resturant container
            resturant cards
    Footer
        Copytright 
        socials
*/

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        alt="App logo"
        src="https://www.logodesign.net/logo/juicy-burger-with-cheese-2138ld.png?industry=COMPANY+NAME"
      ></img>
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

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-logo"
        src="https://b.zmtcdn.com/data/pictures/3/20646803/108a5a80bdd614203774dc4c700bd152_featured_v2.jpg"
      ></img>
      <h3>Res Name</h3>
      <h3>North Indian, chinese</h3>
      <h3>ETA</h3>
      <h3>4.3</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-body">
      <div className="search">search</div>
      <div className="res-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const AppBody = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppBody />);
