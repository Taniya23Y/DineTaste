import RestaurantCard, { IsOpenLabel } from "./RestaurantCart";
import Shimmer from "./ShimmerRestaurant";
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import mockResListData from "./mockData/mockResListData.json";
import HeroCategories from "./HeroCategories";
import HeroDummyRes from "./HeroDummyRes.js";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfRestaurantForSearch, setListOfRestaurantForSearch] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState("");
  const [fetchError, setFetchError] = useState(""); // <-- New state for fetch error
  const timeoutRef = useRef(null);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardIsOpen = IsOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const extractRestaurantList = (data) => {
    return (
      data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const fetchData = async () => {
    try {
      setFetchError(""); // reset error on new fetch
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9582084&lng=77.1255055&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok!");
      }
      const json = await data.json();
      const restaurantList = extractRestaurantList(json?.data);

      if (restaurantList.length === 0)
        throw new Error("No restaurants in live API");

      setListOfRestaurants(restaurantList);
      setListOfRestaurantForSearch(restaurantList);
    } catch (error) {
      console.log("Error fetching live data: ", error);
      setFetchError(error.message || "Failed to fetch"); // Set error message

      // Try to fallback on mock data if available
      const mockList = extractRestaurantList(mockResListData?.data);
      if (mockList.length === 0) {
        console.log("❌ Mock data is also empty!");
        setListOfRestaurants([]); // no data
      } else {
        setListOfRestaurants(mockList);
        setListOfRestaurantForSearch(mockList);
      }
    }
  };

  const handleRetry = () => {
    fetchData();
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    const filteredRestaurant = listOfRestaurantForSearch.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredRestaurant.length === 0) {
      setListOfRestaurants([]);
      setNotFoundMsg(
        `😞 Oops! No restaurants found matching "${searchText}". Try another search!`
      );

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setNotFoundMsg("");
        setListOfRestaurants(listOfRestaurantForSearch);
      }, 3000);
    } else {
      setNotFoundMsg("");
      setListOfRestaurants(filteredRestaurant);
    }
    setSearchText("");
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => parseFloat(res?.info?.avgRating) > 4
    );
    setListOfRestaurants(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 text-center px-4">
        <h1 className="text-3xl font-bold text-red-600">⚠️ You're Offline</h1>
        <p className="text-lg text-gray-700 mt-2">
          Please check your internet connection
        </p>
      </div>
    );
  }

  // Show error box if fetch failed and no restaurants are available
  if (fetchError && listOfRestaurants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50 px-6 text-center max-w-lg mx-auto rounded-md shadow-lg border border-red-300">
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          Could not load restaurants
        </h2>
        <p className="mb-2 text-red-600">Error fetching data: {fetchError}</p>
        <p className="mb-4 text-gray-700">
          This API requires a CORS browser extension. Please install and
          activate a CORS extension to use this website.
        </p>
        <button
          onClick={handleRetry}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="AppBody container-mx min-h-screen flex flex-col">
      <HeroCategories />

      <HeroDummyRes />

      <div className="px-4 md:px-10 pt-[3rem] bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 md:text-xl">
          What Are You Craving Today?
        </h2>

        {/* Filter Section */}
        <div className="bg-white py-1 px-6 pb-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 shadow-sm border-gray-300 w-full">
          {/* Left: Search */}
          <div className="flex items-center justify-center w-full md:w-1/2">
            <form className="flex gap-2 md:gap-4 w-full max-w-xl ">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for Veg Biryani 😆"
                className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                data-testid="searchInput"
              />
              <button
                onClick={handleSearch}
                data-testid="searchBtn"
                className="bg-yellow-500 hover:bg-yellow-600 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
              >
                <MagnifyingGlassIcon className="w-4 h-4" />{" "}
                <span className="hidden md:block">Search</span>
              </button>
            </form>
          </div>

          {/* Right: Top Rated & User */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
            <button
              onClick={handleTopRatedFilter}
              className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-md whitespace-nowrap"
              data-testid="topRatedBtn"
            >
              ⭐ Top Rated Restaurants
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label
                htmlFor="user"
                className="text-gray-700 font-medium select-none"
              >
                User:
              </label>
              <input
                id="user"
                type="text"
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none w-full sm:w-auto"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
                data-testid="userInput"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Not Found Message */}
      {notFoundMsg && (
        <div className="flex-grow flex items-center justify-center px-4">
          <p className="text-center text-xl text-gray-700 font-semibold">
            {notFoundMsg}
          </p>
        </div>
      )}

      {/* Restaurants Grid */}
      {!notFoundMsg && (
        <div className="RestaurantContainer px-4 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardIsOpen resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
