import { useEffect, useState } from "react";

const useOnlineCheck = () => {
  const [onlineCheck, setOnlineCheck] = useState(true);

  console.log("I was Hit!");

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineCheck(false);
    });

    window.addEventListener("online", () => {
      setOnlineCheck(true);
    });
  }, []);

  return onlineCheck;
};

export default useOnlineCheck;
