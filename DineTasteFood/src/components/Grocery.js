const Grocery = () => {
  const groceries = [
    {
      id: 1,
      name: "Fresh Apples",
      price: "₹120/kg",
      image:
        "https://cdn.pixabay.com/photo/2017/01/20/15/06/apples-1995056_1280.jpg",
    },
    {
      id: 2,
      name: "Fresh Apples",
      price: "₹120/kg",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Tomatoes",
      price: "₹30/kg",
      image:
        "https://plus.unsplash.com/premium_photo-1726138647192-5275bef08970?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Potatoes",
      price: "₹25/kg",
      image:
        "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Onions",
      price: "₹35/kg",
      image:
        "https://images.unsplash.com/photo-1467019972079-a273e1bc9173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Rice (1kg)",
      price: "₹60",
      image:
        "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Wheat Flour (1kg)",
      price: "₹45",
      image:
        "https://images.unsplash.com/photo-1627735483792-233bf632619b?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Cooking Oil (1L)",
      price: "₹140",
      image:
        "https://images.unsplash.com/photo-1709293078197-370c804d610c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Milk (1L)",
      price: "₹50",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Sugar (1kg)",
      price: "₹45",
      image:
        "https://images.unsplash.com/photo-1634612831148-03a8550e1d52?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "Salt (1kg)",
      price: "₹20",
      image:
        "https://images.unsplash.com/photo-1659022223309-56ba6915e833?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      name: "Green Chilies",
      price: "₹40/kg",
      image:
        "https://images.unsplash.com/photo-1704473509931-971356e22feb?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
        🛒 Grocery Store
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Welcome to our online grocery store! We have a wide range of products to
        meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example grocery items */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Product Name</h2>
          <p className="text-gray-700 mb-2">Description of the product.</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-500">$9.99</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groceries.map((item) => (
          <div
            key={item.id}
            className="bg-black text-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-yellow-400 font-medium">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
