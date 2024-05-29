import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useResInfo = (resid) => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();

    setResData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return resData;
};

export default useResInfo;
