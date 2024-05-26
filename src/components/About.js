import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about">About Us</h1>
      <div className="user-cards">
        <User />
        <UserClass />
      </div>
    </div>
  );
};

export default About;
