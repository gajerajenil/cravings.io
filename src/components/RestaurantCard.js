import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res-card m-3 p-4 w-[205px] rounded-lg border-black bg-blue-100 hover:bg-blue-200">
      <img
        className="w-full h-[260px] object-cover rounded-lg mb-2"
        src={CDN_URL + cloudinaryImageId}
        alt={resData.name}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;