import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";

const RestaurantInfo = () => {
  const { resid } = useParams();

  const resData = useResInfo(resid);

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
