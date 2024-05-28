import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("Parent Contructor");
  }

  componentDidMount() {
    console.log("Parent Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div className="about-container">
        <h1 className="about">About Us</h1>
        <div className="user-cards">
          <User />
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
