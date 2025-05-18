// ProceedToCheckout.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProceedToCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || {};

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handlePayNow = () => {
    navigate("/payNow", { state: { totalAmount } });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl text-center font-bold mb-6 text-yellow-500">
        Checkout Page
      </h2>

      <p className="text-center text-red-400 font-bold pb-5">
        "Great taste is just a click away — thank you for choosing us to serve
        your cravings!"
      </p>

      <div className="space-y-4">
        {cartItems?.map((item) => (
          <div
            key={item.card.info.id}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.card.info.name}</span>
            <span>
              ₹
              {(
                item.card.info.price / 100 || item.card.info.defaultPrice / 100
              ).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>

      <button
        onClick={handlePayNow}
        className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg transition"
      >
        Pay Now
      </button>
    </div>
  );
};

export default ProceedToCheckout;
