import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ReastaurentCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Simmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  // console.log(info)

  const {
    name = "Restaurant Name Not Available",
    costForTwoMessage = "Cost details not available",
    cuisines = [],
    avgRatingString,
    totalRatingsString,
    locality,
    sla,
  } = info;

  const groupedCardData =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(groupedCardData);

  const itemCards = groupedCardData
    ?.flatMap((card) => card?.card?.card?.itemCards)
    ?.map((itemCard) => itemCard?.card?.info)
    ?.filter(Boolean);

  const categories = groupedCardData?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //  console.log(categories)

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-xl p-6 flex flex-col gap-4 border ">
        {/* Restaurant Name */}
        <h1 className="text-3xl font-bold">{name}</h1>

        {/* Info Box */}
        <div className="border rounded-xl p-4 flex flex-col gap-2 shadow-lg">
          {/* Rating and Cost */}
          <div className="flex items-center gap-2">
            <span className="bg-green-500 rounded-full ">⭐</span>
            <span className="text-md text-gray-700 font-bold">
              {avgRatingString || "N/A"}{" "}
              <span className="text-gray-500">
                ({totalRatingsString || "0 ratings"})
              </span>{" "}
              • {costForTwoMessage}
            </span>
          </div>

          {/* Cuisine */}
          <p className="text-red-600 font-semibold text-sm">
            {cuisines.join(", ")}
          </p>

          {/* Outlet */}
          <div className="text-gray-600 text-sm flex items-center gap-1">
            <span className="font-semibold">Outlet</span>
            <span className="text-red-600">{locality}</span>
          </div>

          {/* Delivery Time */}
          <div className="text-gray-700 font-semibold text-sm flex items-center gap-1">
            ⏳ {sla.slaString}
          </div>
        </div>
      </div>

      <div>
        {/* categories Accordians */}
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

// {/*
//       <ul>
//         {itemCards?.map((item, index) => (
//           <li key={item?.id || index} className="menu-item">
//             {/* Item image */}
//             <img
//               src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.imageId}`}
//               alt={item?.name}
//             />
//             {/* Item details */}
//             <div className="menu-item-info">
//               <h4>{item?.name}</h4>
//               <p>{item?.description || "No description available."}</p>
//               <p className="price">₹{item?.price / 100 || "Not Available"}</p>
//             </div>
//             {/* Add button */}
//             <button className="add-button">ADD</button>
//           </li>
//         ))}
//       </ul> */}
