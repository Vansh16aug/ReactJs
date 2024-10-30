import { useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../redux/cart/cartSlice";

const CartItem = ({
  _id,
  name,
  category,
  isVeg,
  price,
  imageUrl,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      dispatch(updateItemQuantity({ id: _id, quantity: newQuantity }));
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(_id));
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-full mx-auto mb-4 hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={name} className="h-40 w-36 object-cover" />

      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <div
          className={`mt-2 rounded-full w-16 py-1 text-center text-white ${
            isVeg ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isVeg ? "Veg" : "Non-veg"}
        </div>
        <div className="mt-4 text-gray-700 font-medium">Price: ₹{price}</div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="px-3 py-1 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-l transition-colors"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <div className="px-4 py-1 border-t border-b">{quantity}</div>
        <button
          onClick={() => handleQuantityChange(1)}
          className="px-3 py-1 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-r transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="p-4 text-gray-800 font-semibold">
        ₹{(price * quantity).toFixed(2)}
      </div>
            
      <button
        onClick={handleRemove}
        className="ml-6 mr-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
