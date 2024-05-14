import Card from "./Card";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchTxt, setSearchTxt] = useState("");

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="filter">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = resData.filter((item) =>
              item.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );

            setFilteredResData(filteredData);
          }}
        >
          Search
        </button>
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
        {filteredResData.map((item) => (
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
