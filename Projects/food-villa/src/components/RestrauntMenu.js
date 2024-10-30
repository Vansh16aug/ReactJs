import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cart/cartSlice";
import Shimmer from "./common/Shimmer";
import useRestrauntMenu from "../customHooks/useRestrauntMenu";
import { CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [restrauntInfo, setRestrauntInfo] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const user = useSelector((state) => state.user);

  // API call for restaurant menu
  useRestrauntMenu(id, setRestrauntInfo);

  const dispatch = useDispatch();

  function handleAddItem(item) {
    dispatch(addItem(item));
    setToastMessage(`${item.name} added to cart`);
    setShowToast(true);
  }

  // Hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
          showToast ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <p className="text-green-800 font-medium">{toastMessage}</p>
        </div>
      </div>

      {!restrauntInfo ? (
        <Shimmer />
      ) : (
        <div className="max-w-4xl mx-auto p-4">
          {/* Restaurant Info Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              {/* Restaurant Image */}
              <img
                src={restrauntInfo?.data?.info?.imageUrl}
                alt="Restaurant"
                className="h-60 w-full sm:w-64 object-cover rounded-lg"
              />

              {/* Restaurant Details */}
              <div className="mt-4 sm:mt-0">
                <h2 className="text-xl font-semibold text-gray-700">
                  {restrauntInfo?.data?.info?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {restrauntInfo?.data?.info?.areaName},{" "}
                  {restrauntInfo?.data?.info?.locality}
                </p>

                {/* Cuisines Section */}
                <div className="mt-2">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Cuisines:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {restrauntInfo?.data?.info?.cuisines.map(
                      (cuisine, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        >
                          {cuisine}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Rating:{" "}
                    <span className="font-semibold text-yellow-500">
                      {restrauntInfo?.data?.info?.avgRating} ⭐
                    </span>
                  </p>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      restrauntInfo?.data?.info?.isOpen
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {restrauntInfo?.data?.info?.isOpen ? "Open Now" : "Closed"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Menu:</h2>
            <ul className="bg-white shadow-md rounded-lg p-4 space-y-4">
              {restrauntInfo?.data?.menu.length > 0 ? (
                restrauntInfo?.data?.menu.map((item) => (
                  <div
                    key={item?._id}
                    className="relative flex items-center justify-between group p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                  >
                    {/* Menu Item */}
                    <li className="text-gray-700 group-hover:text-gray-900">
                      <span className="font-semibold">{item?.name}</span>
                      {item?.price && (
                        <span className="text-gray-500 ml-2">
                          ₹{item?.price}
                        </span>
                      )}
                      {item?.isVeg ? (
                        <span className="ml-2 px-2 py-1 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                          Veg
                        </span>
                      ) : (
                        <span className="ml-2 px-2 py-1 text-xs font-semibold text-red-500 bg-red-100 rounded-full">
                          Non-Veg
                        </span>
                      )}
                    </li>

                    {/* Add Item Button */}
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
                      onClick={() => {
                        if (user) {
                          handleAddItem(item);
                        } else {
                          toast.error("Please login to add items to cart");
                        }
                      }}
                    >
                      Add Item
                    </button>

                    {/* Image Tooltip on Hover */}
                    {item?.imageUrl && (
                      <div className="absolute top-0 left-full ml-4 w-40 h-40 hidden group-hover:block">
                        <img
                          src={item?.imageUrl}
                          alt={item?.name}
                          className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No items available</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RestrauntMenu;
