import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const PayNow = () => {
  const { state } = useLocation();
  const totalAmount = state?.totalAmount;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [showFlowers, setShowFlowers] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const cleanedValue = value.replace(/\D/g, "").slice(0, 16);
      setFormData((prev) => ({ ...prev, cardNumber: cleanedValue }));
    } else if (name === "cvv") {
      const cleanedValue = value.replace(/\D/g, "").slice(0, 4);
      setFormData((prev) => ({ ...prev, cvv: cleanedValue }));
    } else if (name === "expiry") {
      let cleanedValue = value.replace(/[^0-9/]/g, "").slice(0, 5);
      if (cleanedValue.length === 2 && !cleanedValue.includes("/")) {
        cleanedValue = cleanedValue + "/";
      }
      setFormData((prev) => ({ ...prev, expiry: cleanedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.cardNumber.length !== 16) {
      toast.error("Card number must be 16 digits");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      toast.error("Expiry must be in MM/YY format");
      return;
    }
    if (formData.cvv.length < 3) {
      toast.error("CVV must be at least 3 digits");
      return;
    }

    toast.success("Order placed successfully!");
    setShowFlowers(true); // show animation

    setTimeout(() => {
      navigate("/");
    }, 4000); // show for 4 seconds
  };

  return (
    <div className="relative">
      {showFlowers && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="flower absolute text-2xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random()}s`,
              }}
            >
              🎊
            </span>
          ))}
        </div>
      )}

      <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg mb-10 relative z-10">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Pay by Card
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name on Card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              inputMode="numeric"
              value={formData.cardNumber}
              required
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="1234567812345678"
              maxLength={16}
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Expiry</label>
              <input
                type="text"
                name="expiry"
                inputMode="numeric"
                value={formData.expiry}
                required
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                inputMode="numeric"
                value={formData.cvv}
                required
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>

          <div className="text-right font-bold text-lg mt-2">
            Amount: ₹{totalAmount}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayNow;
