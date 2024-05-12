import { CDN_URL } from "../utils/constants";

const Card = (prop) => {
  const { resData } = prop;

  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <div className="card">
      <img className="card-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{`${sla.deliveryTime} mins `}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default Card;
