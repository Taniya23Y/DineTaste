import React from "react";
import { StarIcon } from "@heroicons/react/24/solid"; // We'll use Heroicons for star

const restaurants = [
  {
    id: 1,
    name: "Bakery World",
    rating: 4.4,
    time: "45-50 mins",
    cuisine: "Bakery, Ice Cream, Snacks, Beverages",
    location: "Parasia Road",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
  },
  {
    id: 2,
    name: "Adil Hotel",
    rating: 4.3,
    time: "35-40 mins",
    cuisine: "North Indian, Biryani, Tandoor",
    location: "Chhindwara Locality",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nigqvxgzvyxtfjuqasgg",
  },
  {
    id: 3,
    name: "Satkar Restaurant",
    rating: 4.4,
    time: "40-45 mins",
    cuisine: "North Indian, South Indian, Salads",
    location: "Satkar Chowk",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
  },
  {
    id: 4,
    name: "Veggie Delight",
    rating: 4.1,
    time: "30-35 mins",
    cuisine: "Vegetarian, Indian, Chinese",
    location: "MG Road",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
  },
  {
    id: 5,
    name: "Spice Hub",
    rating: 4.5,
    time: "50-55 mins",
    cuisine: "Indian, Biryani, Tandoor",
    location: "Station Road",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
  },
  {
    id: 6,
    name: "Cafe Mocha",
    rating: 4.2,
    time: "25-30 mins",
    cuisine: "Cafe, Bakery, Beverages",
    location: "Central Mall",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng",
  },
  {
    id: 7,
    name: "The Fusion Lounge",
    rating: "4.2",
    time: "55-60 mins",
    cuisine: "South Indian, Chinese, Beverages, Fast Food, Desserts",
    location: "Railway Station",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/xuekgyy6nfhmxf1j4xlr",
  },
  {
    id: 8,
    name: "Dev International",
    offer: "₹125 OFF ABOVE ₹349",
    rating: "4.3",
    time: "55-60 mins",
    cuisine: "North Indian, Chinese, Fast Food, Beverages",
    location: "Mohan Nagar",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 9,
    name: "Gupta Bhojnalay",
    offer: "₹100 OFF ABOVE ₹999",
    rating: "4.0",
    time: "35-40 mins",
    cuisine: "Fast Food, Indian, Beverages",
    location: "Chhindwara Locality",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 10,
    name: "Sab Ghar Tak Foods",
    offer: "₹50 OFF ABOVE ₹199",
    rating: "4.4",
    time: "45-50 mins",
    cuisine:
      "North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts",
    location: "Parsia Road",
    image:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=200&q=80",
  },
  // add more as needed
];

const HeroDummyRes = () => {
  return (
    <section className="container mx-auto px-8 py-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Top restaurant chains
      </h2>

      <div className="flex  overflow-x-auto no-scrollbar">
        {restaurants.map((res) => (
          <div
            key={res.id}
            className="min-w-[330px] bg-white rounded-md cursor-pointer  
      hover:translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0"
          >
            <img
              src={res.image}
              alt={res.name}
              className="w-[300px] h-[190px] object-cover rounded-md transition-all duration-500 ease-in-out group-hover:blur-sm group-hover:scale-110"
            />
            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-900 truncate">
                {res.name}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center bg-green-600 rounded-md px-2 py-0.5">
                  <StarIcon className="w-4 h-4 text-white" />
                  <span className="text-xs text-white ml-1">{res.rating}</span>
                </div>
                <span className="text-xs text-gray-500">• {res.time}</span>
              </div>

              <p
                className="text-xs text-gray-600 mt-2 truncate max-w-[180px]"
                title={res.cuisine}
              >
                {res.cuisine}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroDummyRes;
