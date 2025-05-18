import LOGO_Image from "../assets/f.png";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-500 text-gray-900 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
          {/* Logo & Contact */}
          <div className="flex flex-col items-center md:items-start md:w-1/5 text-center md:text-left">
            <div className="flex items-center mb-3">
              <img className="h-10 mr-3" src={LOGO_Image} alt="logo-foodLogo" />
              <span className="text-black text-xl font-bold logo">
                DineTaste
              </span>
            </div>
            <p className="text-sm mb-4">Explore Taste. Dine Better.</p>
            <div className="flex flex-col gap-3">
              <h3 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex items-center gap-2 justify-center md:justify-start">
                <MdMarkEmailRead size={20} />
                Email
              </h3>
              <h3 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex items-center gap-2 justify-center md:justify-start">
                <IoIosContact size={20} />
                Contact us
              </h3>
              <h3 className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex items-center gap-2 justify-center md:justify-start">
                <MdPlace size={20} />
                Avenue
              </h3>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center md:items-start md:w-1/6 text-center md:text-left">
            <span className="text-black text-xl font-bold mb-3">Our Menu</span>
            <div className="flex flex-col gap-2">
              {["Breakfast", "Lunch", "Dinner", "Cuisines"].map((item) => (
                <h2
                  key={item}
                  className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col items-center md:items-start md:w-1/6 text-center md:text-left">
            <span className="text-black text-xl font-bold mb-3">
              Information
            </span>
            <div className="flex flex-col gap-2">
              {["About us", "Testimonial", "Contact us", "Blog"].map((item) => (
                <h2
                  key={item}
                  className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col items-center md:items-start md:w-1/6 text-center md:text-left">
            <span className="text-black text-xl font-bold mb-3">
              Useful Links
            </span>
            <div className="flex flex-col gap-2">
              {[
                "Services",
                "Help & Support",
                "Terms & Conditions",
                "Privacy",
              ].map((item) => (
                <h2
                  key={item}
                  className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start md:w-1/6 text-center md:text-left">
            <span className="text-black text-xl font-bold mb-3">Socials</span>
            <div className="flex flex-col gap-3">
              {[
                { icon: <FaFacebook size={20} />, label: "Facebook" },
                { icon: <FaInstagram size={20} />, label: "Instagram" },
                { icon: <FaLinkedin size={20} />, label: "LinkedIn" },
                { icon: <FaYoutube size={20} />, label: "Youtube" },
              ].map(({ icon, label }) => (
                <h2
                  key={label}
                  className="hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 flex items-center gap-2 justify-center md:justify-start"
                >
                  {icon}
                  {label}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black my-8 mx-auto max-w-6xl" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-black">
            &copy; 2023 - {currYear} DineTaste. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
