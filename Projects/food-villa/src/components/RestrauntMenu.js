import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./common/Shimmer";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [restrauntInfo, setRestrauntInfo] = useState(null);

  useEffect(() => {
    getRestrauntInfo();
    // eslint-disable-next-line
  }, []);

  async function getRestrauntInfo() {
    try {
      const response = await fetch(`https://jsonifyyy.com/restros/${id}`);
      const data = await response.json();
      setRestrauntInfo(data);
    } catch (error) {
      console.error(error);
    }
  }

  return !restrauntInfo ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restraunt id : {id}</h1>
        <h2>{restrauntInfo?.data?._id}</h2>
        <h2>{restrauntInfo?.data?.info?.name}</h2>
        <img src={restrauntInfo?.data?.info?.imageUrl} alt="res" />
        <h2>{restrauntInfo?.data?.info?.areaName}</h2>
        <h2>{restrauntInfo?.data?.info?.locality}</h2>
        <h2>{restrauntInfo?.data?.info?.avgRating}</h2>
        <h2>{restrauntInfo?.data?.info?.isOpen}</h2>
      </div>
      <div>
        Menu:
        <h2>
          {restrauntInfo?.data?.menu.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </h2>
      </div>
    </div>
  );
};
export default RestrauntMenu;
