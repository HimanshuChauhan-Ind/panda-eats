import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineCheck from "../utils/useOnlineCheck";

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
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchTxt, setSearchTxt] = useState("");

  const onlineCheck = useOnlineCheck();
  console.log(onlineCheck);
  if (onlineCheck === false) {
    return <h1>We lost you there, please check your Network!!</h1>;
  }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-body">
      <div className="m-2 p-2">
        <input
          className="border"
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="bg-green-300 mx-2 px-2"
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
          className="bg-yellow-300 px-2 m-2"
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
      <div className="flex flex-wrap">
        {filteredResData.map((item) => (
          <Link key={item.info.id} to={"restaurant/" + item.info.id}>
            <Card resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
