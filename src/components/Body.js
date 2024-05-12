import Card from "./Card";
import mockData from "../utils/mockData";

const Body = () => {
  return (
    <div className="res-body">
      <div className="search">search</div>
      <div className="res-container">
        {mockData.map((item) => (
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
