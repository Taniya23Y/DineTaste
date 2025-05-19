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
    <div className="container mx-auto Cart text-center m-3 p-3 ">
      <div className="w-6/12 m-auto ">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Header section */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 mr-2 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
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
                    className="bg-white text-red-500 border border-red-500 py-1.5 px-4 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Clear Cart
                  </button>
                )}
              </div>
            </div>

            {/* Cart content */}
            <div className="p-6">
              {cartItems.length === 0 ? (
                 <div className="text-center py-10 sm:py-14 md:py-16 flex flex-col items-center px-4 sm:px-6">
  <div className="bg-yellow-50 p-4 sm:p-5 md:p-6 rounded-full mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-yellow-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  </div>
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
    Your cart is empty
  </h2>
  <p className="text-sm sm:text-base text-gray-500 mb-6 text-center max-w-sm">
    Looks like you haven't added anything to your cart yet
  </p>
  <Link to="/">
    <button className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-md flex items-center font-medium text-sm sm:text-base">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
                   </svg>
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
                        className="p-4 flex justify-between items-center bg-white border border-gray-100 rounded-xl hover:border-yellow-500 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex-1 pr-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {item?.card?.info?.name}
                          </h3>
                          <p className="text-red-600 font-medium text-lg">
                            ₹
                            {(
                              item?.card?.info?.price / 100 ||
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
                          <div className="flex-shrink-0 relative">
                            <div className="h-24 w-24 rounded-lg overflow-hidden shadow-md">
                              <img
                                src={${CDN_URL}${item?.card?.info?.imageId}}
                                alt={item?.card?.info?.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <button
                              className="absolute -bottom-2 right-2 bg-white text-orange-500 p-1.5 rounded-lg shadow-md text-xs font-medium flex items-center border border-gray-200 hover:bg-yellow-500 hover:text-white transition-colors"
                              onClick={() => handleRemoveItem(item)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6"
                                />
                              </svg>
                              REMOVE
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary section */}
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
                      onClick={() => {
                        // 1. Navigate to the checkout page with cart info
                        navigate("/proceedToCheckout", {
                          state: {
                            cartItems,
                            totalAmount: calculateTotal(),
                          },
                        });

                        // 2. Clear the cart after successful navigation (you can move this after payment success if needed)
                        dispatch(clearCart());
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <ItemList items={cartItems} /> */}
      </div>
    </div>
  );
};

export default Cart;
