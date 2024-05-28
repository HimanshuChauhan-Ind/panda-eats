import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/HimanshuChauhan-Ind"
    );
    const json = await data.json();

    this.setState({
      userData: json,
    });
  }

  render() {
    const { name, location, email } = this.state.userData;

    return (
      <div className="userInfo">
        <h2>{name}</h2>
        <h2>{location || "Not Available"}</h2>
        <h2>{email || "Not Available"}</h2>
      </div>
    );
  }
}

export default UserClass;
