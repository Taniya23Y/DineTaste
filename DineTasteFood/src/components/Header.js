import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  PiShoppingCartSimpleFill,
  PiHouseSimpleFill,
  PiInfoFill,
  PiPhoneCallFill,
  PiBasketFill,
} from "react-icons/pi";
import { BiSolidLogInCircle } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/f.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-500 shadow-md text-black">
      <div className="max-w-7xl container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="DineTaste Logo" className="h-10 w-auto" />
          <span className="font-extrabold text-2xl tracking-wide logo">
            DineTaste
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold tracking-wide">
          <Link
            to="/"
            className="flex items-center gap-1 text-black hover:text-gray-900"
          >
            <PiHouseSimpleFill className="w-5 h-5 text-white" />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1 text-black hover:text-gray-900"
          >
            <PiInfoFill className="w-5 h-5 text-white" />
            About Us
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-1 text-black hover:text-gray-900"
          >
            <PiPhoneCallFill className="w-5 h-5 text-white" />
            Contact
          </Link>
          <Link
            to="/grocery"
            className="flex items-center gap-1 text-black hover:text-gray-900"
          >
            <PiBasketFill className="w-5 h-5 text-white" />
            Grocery
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-1 bg-black text-white px-2 py-2 rounded-full hover:bg-gray-800"
          >
            <PiShoppingCartSimpleFill className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                {cartItems.length}
              </span>
            )}
          </Link>

          <button
            onClick={() =>
              setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
            className="flex items-center gap-1 bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800"
          >
            <BiSolidLogInCircle className="w-5 h-5" />
            {btnNameReact}
          </button>

          <span className="font-bold">{loggedInUser}</span>
          <span
            className={`ml-4 font-bold ${
              onlineStatus ? "text-green-600" : "text-red-600"
            }`}
          >
            {onlineStatus ? "🟢" : "🔴"}
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-[1px] rounded-tl-[20px] rounded-bl-[20px] right-0 w-60 h-full bg-yellow-400 z-50 px-6 py-8 shadow-lg flex flex-col space-y-6 font-semibold tracking-wide"
          >
            {/* Close Button Inside Menu */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-black text-3xl p-2 rounded-full hover:bg-black hover:text-white"
            >
              <HiX />
            </button>

            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-lg text-black hover:text-gray-900"
            >
              <PiHouseSimpleFill className="text-white" /> Home
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-lg text-black hover:text-gray-900"
            >
              <PiInfoFill className="text-white" /> About Us
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-lg text-black hover:text-gray-900"
            >
              <PiPhoneCallFill className="text-white" /> Contact
            </Link>
            <Link
              to="/grocery"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-lg text-black hover:text-gray-900"
            >
              <PiBasketFill className="text-white" /> Grocery
            </Link>
            <Link
              to="/cart"
              onClick={handleLinkClick}
              className="relative w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800"
            >
              <PiShoppingCartSimpleFill className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button
              onClick={() =>
                setBtnNameReact((prev) =>
                  prev === "Login" ? "Logout" : "Login"
                )
              }
              className="flex items-center gap-2 text-lg bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              <BiSolidLogInCircle />
              {btnNameReact}
            </button>

            <span className="text-lg font-bold text-center">
              {loggedInUser}
            </span>
            <span
              className={`text-center text-lg font-bold ${
                onlineStatus ? "text-green-600" : "text-red-600"
              }`}
            >
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
