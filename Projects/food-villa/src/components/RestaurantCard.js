const RestaurantCard = ({
  category,
  description,
  imageUrl,
  isVeg,
  name,
  price,
  _id,
}) => {
  return (
    <div>
      <div className="card">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <h4>{description}</h4>
        <span>
          <h4>{isVeg ? "Vegetarian" : "Non-Vegetarian"}</h4>
          <h4>{category}</h4>
          <h4>{price / 100} INR</h4> {/* Assuming price is in paise or cents */}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
