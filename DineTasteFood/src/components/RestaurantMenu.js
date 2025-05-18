import { useState } from "react";
import Shimmer from "./ShimmerRestaurant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { FiAlertCircle } from "react-icons/fi";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (loading) return <Shimmer />;

  if (error) {
    return (
      <div className="max-w-lg mx-auto mt-16 p-10 bg-white rounded-lg shadow-lg border border-yellow-300 text-center mb-28">
        <div className="flex justify-center mb-4">
          <FiAlertCircle className="text-red-600 text-5xl" />
        </div>
        <h2 className="text-2xl font-extrabold text-yellow-500 mb-3">
          Oops! Could not load restaurant data
        </h2>
        <p className="text-black mb-6">
          Error fetching data: <span className="font-mono">{error}</span>
        </p>
        <p className="mb-6 text-red-500">
          This API requires a <strong>CORS browser extension</strong>. Please
          install and activate a CORS extension to use this website.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300"
          aria-label="Retry loading data"
        >
          Try Again
        </button>
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-center">
      <h1 className="menu font-bold my-6 text-2xl">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
