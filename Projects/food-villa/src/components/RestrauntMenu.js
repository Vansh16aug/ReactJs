import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./common/Shimmer";
import useRestrauntMenu from "../customHooks/useRestrauntMenu";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [restrauntInfo, setRestrauntInfo] = useState(null);

  //api calling for menu of restraunts
  useRestrauntMenu(id, setRestrauntInfo);

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
            <li key={item?._id}>{item?.name}</li>
          ))}
        </h2>
      </div>
    </div>
  );
};
export default RestrauntMenu;
