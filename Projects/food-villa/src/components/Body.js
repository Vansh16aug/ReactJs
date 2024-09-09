import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./common/Shimmer";

function Body() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText) {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch("https://jsonifyyy.com/restros");
      const data = await response.json(); // Destructuring the data
      console.log(data);
      setAllRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* {console.log(info)} */}
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) =>
            restaurant?.data ? (
              <RestaurantCard key={restaurant.data._id} {...restaurant.data} />
            ) : null
          )
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </>
  );
}

export default Body;
