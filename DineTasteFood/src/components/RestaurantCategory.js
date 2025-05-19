import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
  <div className="w-full px-4 sm:px-6 lg:px-8 my-4">
    <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg p-4 rounded-lg">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-base sm:text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-lg">⬇️</span>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  </div>
);

};

export default RestaurantCategory;
