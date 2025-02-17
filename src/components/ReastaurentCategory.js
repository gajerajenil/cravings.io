import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {   
    setShowIndex();
}

  return (
    <div>
      {/*  Header */}
      <div className="max-w-3xl mx-auto my-4 p-3 bg-gray-50 shadow-lg">
        <div className=" px-2 flex justify-between cursor-pointer " onClick={handleClick}>
          <span className=" font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Acordian Body */}
        {showItems &&
        <ItemList items={data.itemCards} />
        }
      </div>
    </div>
  );
};

export default RestaurantCategory;
