const RestaurantCard = ({ info, menu }) => {
  const {
    areaName,
    avgRating,
    // cuisines,
    imageUrl,
    isOpen,
    deliveryTime,
    name,
  } = info;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-60 mx-auto">
      {/* Image */}
      <img src={imageUrl} alt={name} className="h-40 w-full object-cover" />

      {/* Restaurant Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        <div className="mt-2 text-sm text-gray-600">
          <h4>
            Rating:{" "}
            <span className="font-bold text-yellow-500">{avgRating} ⭐</span>
          </h4>
          {/* <h4>Cuisines: {cuisines.join(", ")}</h4> */}
          <h4>
            Area: <span className="font-bold">{areaName}</span>
          </h4>
          <h4>
            Delivery Time: <span className="font-bold">{deliveryTime} min</span>
          </h4>
        </div>

        {/* Open/Closed Status */}
        <div
          className={`mt-3 max-w-24  rounded-full text-center text-white ${
            isOpen ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isOpen ? "Open Now" : "Closed"}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
