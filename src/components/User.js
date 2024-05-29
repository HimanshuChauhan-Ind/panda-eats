import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    userData();

    const timer = setInterval(() => {
      console.log("Inside UseEffect User");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const userData = async () => {
    const data = await fetch(
      "https://api.github.com/users/HimanshuChauhan-Ind"
    );
    const json = await data.json();
    setUser(json);
  };

  const { name, location, email } = user;

  return (
    <div className="userInfo">
      <h2>{name}</h2>
      <h2>{location || "Not Available"}</h2>
      <h2>{email || "Not Available"}</h2>
    </div>
  );
};

export default User;
