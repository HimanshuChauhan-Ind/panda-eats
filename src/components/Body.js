import Card from "./Card";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(mockData);

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
