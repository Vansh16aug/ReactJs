import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cart/cartSlice";
import CartItem from "../../CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Cart Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Cart Items or Empty Message */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item._id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
