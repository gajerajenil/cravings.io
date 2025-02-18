import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ReastaurentCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null)

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
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={showIndex === category?.card?.card.title}
            setShowIndex={setShowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

