import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./common/Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filter";
import useRestraunt from "../customHooks/useRestraunt";
import useInternetStatus from "../customHooks/useInternetStatus";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  //api calling
  useRestraunt(setAllRestaurants, setFilteredRestaurants, setLoading);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    // console.log(searchValue);
    const filteredData = filterData(searchValue, allRestaurants);
    setFilteredRestaurants(filteredData);
    // console.log(filteredData);
  };

  //if user is offline
  const status = useInternetStatus();

  if (status === false) {
    return (
      <h1>
        🌐 You're currently offline. Please check your internet connection and
        ensure your VPN is disabled if you're using one.⛔
      </h1>
    );
  }

  // Render Shimmer while loading
  if (loading) {
    return <Shimmer />;
  }

  return (
    <>
      {/* Search Bar Container */}
      <div className="flex items-center mt-5 space-x-3 p-4 bg-gray-100 rounded-lg shadow-md mx-auto max-w-2xl">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          className="text-gray-500"
        >
          <path d="M 7 4 C 5.3545455 4 4 5.3545455 4 7 L 4 43 C 4 44.645455 5.3545455 46 7 46 L 43 46 C 44.645455 46 46 44.645455 46 43 L 46 7 C 46 5.3545455 44.645455 4 43 4 L 7 4 z M 7 6 L 43 6 C 43.554545 6 44 6.4454545 44 7 L 44 43 C 44 43.554545 43.554545 44 43 44 L 7 44 C 6.4454545 44 6 43.554545 6 43 L 6 7 C 6 6.4454545 6.4454545 6 7 6 z M 22.5 13 C 17.26514 13 13 17.26514 13 22.5 C 13 27.73486 17.26514 32 22.5 32 C 24.758219 32 26.832076 31.201761 28.464844 29.878906 L 36.292969 37.707031 L 37.707031 36.292969 L 29.878906 28.464844 C 31.201761 26.832076 32 24.758219 32 22.5 C 32 17.26514 27.73486 13 22.5 13 z M 22.5 15 C 26.65398 15 30 18.34602 30 22.5 C 30 26.65398 26.65398 30 22.5 30 C 18.34602 30 15 26.65398 15 22.5 C 15 18.34602 18.34602 15 22.5 15 z"></path>
        </svg>

        {/* Search Input */}
        <input
          type="text"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={handleSearch} // Filter as the user types
        />
      </div>

      {/* Restaurant List Container */}
      <div
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
        "
      >
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restraunt/${restaurant?._id}`}
              key={restaurant?._id}
              className="block transform transition-transform hover:scale-102"
            >
              <RestaurantCard
                info={restaurant?.info} // Pass the info object
                menu={restaurant?.menu}
              />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No restaurants found</p>
        )}
      </div>
    </>
  );
}

export default Body;
