import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    resInfo();
  }, []);

  const { resid } = useParams();

  const resInfo = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();

    setResData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-info">
      {resData.map((item) => {
        return (
          <h3 key={item.card.info.id}>
            {item.card.info.name}: Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </h3>
        );
      })}
    </div>
  );
};

export default RestaurantInfo;
