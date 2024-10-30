import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./common/Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filter";
import useRestraunt from "../customHooks/useRestraunt";
import useInternetStatus from "../customHooks/useInternetStatus";
import { Search, X } from "lucide-react";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  //api calling
  useRestraunt(setAllRestaurants, setFilteredRestaurants, setLoading);

  //if user is offline
  const status = useInternetStatus();
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    const filteredData = filterData(searchValue, allRestaurants);
    setFilteredRestaurants(filteredData);
  };

  const handleClear = () => {
    setSearchText("");
    setFilteredRestaurants(allRestaurants);
  };

  if (status === false) {
    return (
      <h1 className="text-center p-4 text-red-600">
        🌐 You're currently offline. Please check your internet connection and
        ensure your VPN is disabled if you're using one.⛔
      </h1>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar Container */}
      <div className="w-full max-w-2xl mx-auto">
        <div
          className={`flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-200 transition-all duration-300 ease-in-out ${
            isFocused ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
          }`}
        >
          <Search className="w-5 h-5 text-gray-400" />

          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 focus:ring-0 focus:outline-none"
            placeholder="Search restaurants by name, cuisine, or location..."
            value={searchText}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {searchText && (
            <button
              onClick={handleClear}
              className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {searchText && (
          <p className="text-sm text-gray-500 mt-2 text-center">{`Showing results for "${searchText}"`}</p>
        )}
      </div>
      {/* Restaurant List Container */}
      <div
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center mx-auto max-w-[1500px]
        "
      >
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) =>
            restaurant?.info?.isOpen ? (
              <Link
                to={`/restraunt/${restaurant?._id}`}
                key={restaurant?._id}
                className="block transform transition-transform hover:scale-102"
              >
                <RestaurantCard
                  info={restaurant?.info}
                  menu={restaurant?.menu}
                />
              </Link>
            ) : (
              <div
                key={restaurant?._id}
                className="pointer-events-none opacity-75"
              >
                <RestaurantCard
                  info={restaurant?.info}
                  menu={restaurant?.menu}
                />
              </div>
            )
          )
        ) : (
          <p className="text-center text-gray-500 h-screen">
            No restaurants found
          </p>
        )}
      </div>
    </div>
  );
}

export default Body;
