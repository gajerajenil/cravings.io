import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
    
 
  if (resInfo === null) return <Simmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const {
    name = "Restaurant Name Not Available",
    costForTwoMessage = "Cost details not available",
    cuisines = [],
  } = info;

  const groupedCardData =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCardsInfo = groupedCardData
    ?.flatMap((card) => card?.card?.card?.itemCards)
    ?.map((itemCard) => itemCard?.card?.info)
    ?.filter(Boolean);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCardsInfo?.map((item, index) => (
          <li key={item?.id || index} className="menu-item">
            {/* Item image */}
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.imageId}`}
              alt={item?.name}
            />
            {/* Item details */}
            <div className="menu-item-info">
              <h4>{item?.name}</h4>
              <p>{item?.description || "No description available."}</p>
              <p className="price">₹{item?.price / 100 || "Not Available"}</p>
            </div>
            {/* Add button */}
            <button className="add-button">ADD</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
