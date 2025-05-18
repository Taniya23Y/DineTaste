import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          // key={`${item?.card?.info?.id}-${index}`} // <-- unique even if item repeats
          className="p-8 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="py-2 w-8/12">
            <span className="py-2 font-semibold">{item.card.info.name}</span>
            <p className="text-xs py-2 text-gray-500 text-left font-medium">
              {item?.card?.info?.description}
            </p>
            <button className="bg-black text-white rounded border-white px-4">
              <span className="text-xs font-semibold text-center">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </button>
          </div>
          <div className="w-4/12 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="image"
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray bg-opacity-80 flex justify-center items-center">
              {/* <button className=" bg-white hover:bg-orange-500 text-black font-bold p-2 rounded-md shadow-md  cursor-pointer"> */}
              <button
                className=" bg-white text-orange-500 hover:bg-[#EAB308] hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[50%] -bottom-5 -translate-x-[50%]"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
