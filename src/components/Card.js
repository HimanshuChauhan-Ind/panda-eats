import { CDN_URL } from "../utils/constants";

const Card = (prop) => {
  const { resData } = prop;

  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  return (
    <div className="bg-slate-100 w-96 m-4 rounded-lg">
      <img
        className="p-2 rounded-xl w-full"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{`${sla.deliveryTime} mins `}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default Card;
