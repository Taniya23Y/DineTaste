import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  // how we read the info from cart -by subscribing
  // the performance is much high(always subscribe to a small portion of store)
  const cartItems = useSelector((store) => store.cart.items);

  // by doing this performance is very low in redux
  // const cartItems = useSelector((store) => store);
  // const cartItems = store.cart.items;

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total +
          (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100,
        0
      )
      .toFixed(2);
  };

 return (
  <div className="Cart px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg className="h-7 w-7 mr-2 text-green-700" ... />
              <span>Your Cart</span>
              {cartItems.length > 0 && (
                <span className="ml-2 bg-yellow-500 text-black text-sm py-1 px-3 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </h1>
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="bg-white text-red-500 border border-red-500 py-1.5 px-4 rounded-lg hover:bg-red-50 text-sm font-medium flex items-center"
              >
                <svg className="h-4 w-4 mr-1" ... />
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center">
              <div className="bg-yellow-50 p-6 rounded-full mb-4">
                <svg className="h-16 w-16 text-yellow-400" ... />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added anything to your cart yet
              </p>
              <Link to="/">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white py-3 px-8 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-md flex items-center font-medium">
                  <svg className="h-5 w-5 mr-2" ... />
                  Browse Restaurants
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item?.card?.info?.id}
                    className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-gray-100 rounded-xl hover:border-yellow-500 hover:shadow-md"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item?.card?.info?.name}
                      </h3>
                      <p className="text-red-600 font-medium text-lg">
                        ₹
                        {(item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100
                        ).toFixed(2)}
                      </p>
                      {item?.card?.info?.description && (
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {item?.card?.info?.description}
                        </p>
                      )}
                    </div>

                    {item?.card?.info?.imageId && (
                      <div className="relative">
                        <div className="h-24 w-24 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={`${CDN_URL}${item?.card?.info?.imageId}`}
                            alt={item?.card?.info?.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <button
                          className="absolute -bottom-2 right-2 bg-white text-orange-500 p-1.5 rounded-lg shadow-md text-xs font-medium flex items-center border border-gray-200 hover:bg-yellow-500 hover:text-white"
                          onClick={() => handleRemoveItem(item)}
                        >
                          <svg className="h-3.5 w-3.5 mr-1" ... />
                          REMOVE
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 border-t border-dashed border-gray-200 pt-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Sub Total</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Delivery Fee</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t border-gray-200 my-4"></div>
                  <div className="flex justify-between font-bold text-xl text-gray-800">
                    <span>Total Amount</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium text-lg flex items-center justify-center shadow-md"
                  onClick={() =>
                    navigate("/proceedToCheckout", {
                      state: { cartItems },
                    })
                  }
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;
