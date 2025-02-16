const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/*  Header */}
      <div className="max-w-3xl mx-auto my-3 p-3 bg-gray-50 flex shadow-lg justify-between border-b">
        <span className="font-bold text-md">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
          {/* Acordian Body */}
          
          
    </div>
  );
};

export default RestaurantCategory;
