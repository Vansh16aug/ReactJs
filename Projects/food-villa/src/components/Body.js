import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./common/Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // New state for loading

  function filterData(searchText) {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch("https://jsonifyyy.com/restros");
      const { data } = await response.json();

      // console.log("Fetched restaurant data:", data);
      setAllRestaurants(data);
      setFilteredRestaurants(data);
      setLoading(false); // Data fetched, stop loading
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLoading(false); // Stop loading on error as well
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    // console.log(searchValue);
    const filteredData = filterData(searchValue);
    setFilteredRestaurants(filteredData);
    // console.log(filteredData);
  };

  // Render Shimmer while loading
  if (loading) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 50 50"
        >
          <path d="M 7 4 C 5.3545455 4 4 5.3545455 4 7 L 4 43 C 4 44.645455 5.3545455 46 7 46 L 43 46 C 44.645455 46 46 44.645455 46 43 L 46 7 C 46 5.3545455 44.645455 4 43 4 L 7 4 z M 7 6 L 43 6 C 43.554545 6 44 6.4454545 44 7 L 44 43 C 44 43.554545 43.554545 44 43 44 L 7 44 C 6.4454545 44 6 43.554545 6 43 L 6 7 C 6 6.4454545 6.4454545 6 7 6 z M 22.5 13 C 17.26514 13 13 17.26514 13 22.5 C 13 27.73486 17.26514 32 22.5 32 C 24.758219 32 26.832076 31.201761 28.464844 29.878906 L 36.292969 37.707031 L 37.707031 36.292969 L 29.878906 28.464844 C 31.201761 26.832076 32 24.758219 32 22.5 C 32 17.26514 27.73486 13 22.5 13 z M 22.5 15 C 26.65398 15 30 18.34602 30 22.5 C 30 26.65398 26.65398 30 22.5 30 C 18.34602 30 15 26.65398 15 22.5 C 15 18.34602 18.34602 15 22.5 15 z"></path>
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch} // Filter as the user types
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link to={`/restraunt/${restaurant._id}`} key={restaurant._id}>
              <RestaurantCard
                info={restaurant.info} // Pass the info object
                menu={restaurant.menu}
              />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </>
  );
}

export default Body;
