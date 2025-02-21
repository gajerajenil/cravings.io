import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";
const CartItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="p-2 m-2 border-b border-gray-300 flex justify-between items-center"
        >
          {/* Left Side - Item Details */}
          <div className="flex-1 px-4">
            <div className="py-2 font-semibold">
              <span>{item?.card?.info?.name}</span>
              <span className="px-2">
                - ₹
                {item.card?.info.price
                  ? item.card?.info.price / 100
                  : item.card?.info.defaultPrice / 100}
              </span>
            </div>
            <span className="text-sm">
              ★{item.card?.info?.ratings?.aggregatedRating?.rating ?? "3.0"}
            </span>

            <p className="text-sm">
              {item.card?.info?.description ??
                "It's very Delicious item. You have to try once."}
            </p>
          </div>

          {/* Right Side - Image & Add Button */}
          <div className="relative w-24 h-24 flex flex-col items-center">
            {/* Food Image */}
            <img
              src={
                item?.card?.info?.imageId
                  ? CDN_URL + item?.card?.info?.imageId
                  : "https://via.placeholder.com/100?text=No+Image"
              }
              alt={item?.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
