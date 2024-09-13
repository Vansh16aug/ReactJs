const RestaurantCard = ({ info, menu }) => {
  const {
    areaName,
    avgRating,
    cuisines,
    imageUrl,
    isOpen,
    deliveryTime,
    name,
  } = info;

  return (
    <div>
      <div className="card">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <span className="flex flex-col">
          <h4>Rating: {avgRating} ⭐</h4>
          <h4>Cuisines: {cuisines.join(", ")}</h4>
          <h4>Area: {areaName}</h4>
          <h4>Delivery Time: {deliveryTime} min</h4>
          <h4 className="bg-[#038C3E] text-white">
            {isOpen ? "Open Now" : "Closed"}
          </h4>
        </span>
        {/* <div>
          <h3>Menu:</h3>
          {menu.map((item) => (
            <div key={item._id} className="menu-item">
              <h4>{item.name}</h4>
               <p>{item.description}</p> 
              <h4>{item.isVeg ? "Vegetarian" : "Non-Vegetarian"}</h4>
              <h4>{item.category}</h4>
              <h4>{item.price / 100} INR</h4>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
