import Card from "./Card";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="res-body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resData.filter(
              (item) => item.info.avgRating > 4
            );
            setResData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resData.map((item) => (
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
