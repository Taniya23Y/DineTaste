const categories = [
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  },
  {
    name: "Biryani",
    image:
      "https://img.freepik.com/premium-photo/plate-food-with-noodles-meat-vegetables_1197144-525.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Khichdi",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/xuekgyy6nfhmxf1j4xlr",
  },
  {
    name: "Burger",
    image:
      "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg",
  },
  {
    name: "Ice Cream",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/icecream.png",
  },
  {
    name: "Fries",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBt5RdbNGN2PopQ1ox14cVQI7tiXglqrAIA&s",
  },
  {
    name: "Rolls",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Rolls%20&%20Wraps",
  },
  {
    name: "South Indian",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/South%20Indian%20Thali.png",
  },
  {
    name: "Cakes",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m3ljva0xnzgpfw6ckr4y",
  },
  {
    name: "Drinks",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/FOOD_CATALOG/IMAGES/CMS/2025/1/19/86fa85b5-b3f6-4cc4-8e87-dcba8e7f6551_07d65848-0f51-4b9e-b299-fb487d1c7bc9.JPG",
  },
  {
    name: "Chinese",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/kyzzie5hzb0hk11ez22e",
  },
  {
    name: "Pasta",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/siupapl6fl0jpjmht7ch",
  },
  {
    name: "Dosa",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/u8fuudupntunqlr37bed",
  },
  {
    name: "Momos",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/h1cmf9wbakbdfqfezqke",
  },
  {
    name: "Tea",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/FOOD_CATALOG/IMAGES/CMS/2024/7/2/0ac82d13-4185-4d6c-a7f5-0bcabb9d1d99_4a982218-f122-495f-ba96-769369c22088.jpg",
  },
  {
    name: "Salads",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/salad.png",
  },
  {
    name: "Chaat",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/3a2a97fda62e0d12d002777bf717deba",
  },
  {
    name: "Thali",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Autosuggest/Top%20200%20queries/thali.png",
  },
];

const HeroCategories = () => {
  return (
    <div className="container mx-auto py-14 px-4 md:px-10 bg-white">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        What Are You Craving Today?
      </h2>

      <div className="p-1 flex overflow-x-auto no-scrollbar md:space-x-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px] cursor-pointer"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-yellow-400 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-black text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCategories;
