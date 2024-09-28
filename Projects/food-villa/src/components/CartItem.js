import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cart/cartSlice";

const CartItem = ({ _id, name, category, isVeg, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(_id));
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-full mx-auto mb-4 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img src={imageUrl} alt={name} className="h-40 w-36 object-cover" />

      {/* Item Info */}
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

      {/* Quantity Controls */}
      <div className="flex items-center">
        <button
          onClick={decreaseQuantity}
          className="px-3 py-1 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-l transition-colors"
        >
          -
        </button>
        <div className="px-4 py-1 border-t border-b">{quantity}</div>
        <button
          onClick={increaseQuantity}
          className="px-3 py-1 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-r transition-colors"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="p-4 text-gray-800 font-semibold">
        ₹{(price * quantity).toFixed(2)}
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handleRemove(_id)}
        className="ml-6 mr-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
