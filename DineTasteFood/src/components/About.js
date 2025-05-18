import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      // <div className="container mx-auto px-4 py-8">
      //   <h1 className="text-3xl font-bold mb-4">About Class Components</h1>
      //   <p className="text-lg text-gray-700 mb-6">
      //     Welcome to the Namaste React web series!
      //   </p>
      //   <div>
      //     <h1>LoggedIn User:</h1>
      //     <span>
      //       <UserContext.Consumer>
      //         {({ loggedInUser }) => (
      //           <h1 className="text-xl font-bold">{loggedInUser}</h1>
      //         )}
      //       </UserContext.Consumer>
      //     </span>
      //   </div>
      //   <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      //     <h2 className="text-xl font-semibold mb-4">User Information</h2>
      //     <UserClass name={"Taniya"} location={"Indore (class)"} />
      //   </div>
      // </div>

      //   <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      //   <div className="max-w-7xl mx-auto text-center">
      //     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About DineTaste - Food</h2>
      //     <p className="text-lg md:text-xl text-gray-600 mb-8">
      //       Experience the rich and diverse flavors of India at DineTaste - Food. Our restaurant is committed to bringing you authentic
      //       Indian cuisine with a modern twist, using the freshest ingredients and traditional cooking techniques.
      //     </p>
      //     <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      //       <img
      //         src="https://via.placeholder.com/350" // Replace with actual image URL
      //         alt="Delicious Indian Cuisine"
      //         className="w-full lg:w-1/2 rounded-lg shadow-lg"
      //       />
      //       <div className="lg:w-1/2 text-left">
      //         <h3 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">Delicious & Healthy Foods</h3>
      //         <p className="text-base md:text-lg text-gray-600 mb-6">
      //           At DineTaste - Food, we believe that every meal should be a celebration of life. Our chefs are dedicated to crafting dishes that not only
      //           satisfy your hunger but also warm your heart. From our aromatic curries to our tantalizing tandoori specialties, each dish is prepared
      //           with love and care.
      //         </p>
      //         <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
      //           <li>Fresh and high-quality ingredients.</li>
      //           <li>Authentic Indian spices and flavors.</li>
      //           <li>Vegetarian and vegan options available.</li>
      //           <li>Friendly and welcoming atmosphere.</li>
      //         </ul>
      //         <div className="mt-6">
      //           <button className="px-8 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition duration-300">
      //             Order Now
      //           </button>
      //           <button className="px-8 py-3 ml-4 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition duration-300">
      //             Read More
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="container-max mx-auto bg-gray-100 py-12 px-6 lg:px-24">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to{" "}
            <span className="text-2xl md:text-3xl font-semibold text-orange-600">
              DineTaste - Food
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Experience the best of Indian cuisine with a touch of modern
            flavors.
          </p>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At DineTaste - Food, we are passionate about bringing you the
              authentic taste of India. Founded in 2005, our restaurant has been
              dedicated to providing a delightful dining experience with a blend
              of traditional and contemporary Indian dishes. Our mission is to
              offer delicious meals made with the freshest ingredients and
              prepared with love and care.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Whether you are craving classic curries or innovative fusion
              dishes, we have something for everyone. Join us on a culinary
              journey and discover why DineTaste - Food is a favorite among food
              enthusiasts.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              What Makes Us Unique
            </h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src="https://c8.alamy.com/comp/2RA24K0/aesthetic-summer-fresh-cocktails-with-fruits-low-alcohol-zero-proof-drinks-trendy-shadows-and-sunlight-natural-light-flat-lay-2RA24K0.jpg"
                    alt="Fresh Ingredients"
                    className="w-24 h-24 mb-4 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Fresh Ingredients
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use only the freshest ingredients to create our dishes,
                    ensuring quality and taste in every bite.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANUosPs2Z-I2PBEM0-iUA8jzW5N_9Is7SjA&s"
                    alt="Authentic Recipes"
                    className="w-24 h-24 mb-4 rounded-full mx-auto object-fit"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Authentic Recipes
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our recipes are handed down through generations, preserving
                    the true essence of Indian culinary traditions.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src="https://i.pinimg.com/474x/14/b3/4a/14b34a787476e8b1f2c9d352bc3b6fc6.jpg"
                    alt="Customer Satisfaction"
                    className="w-24 h-24 mb-4 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Customer Satisfaction
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to provide a memorable dining experience for every
                    guest, ensuring satisfaction and happiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmUpA2XaFg7w_-jU24TXnWVqn7cxIkN1Npg&s"
                  alt="Dish 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hluCmTh_b48_RwDlkK6FlKJGdYjRwBH5AQ&s"
                  alt="Dish 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrWUhVpjBpK9hM0Z1fYDyzFDdedJOf-XwjQ&s"
                  alt="Dish 3"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FVCIFfxgA9aCiTdW8e7u38baFBBjJEWOew&s"
                  alt="Dish 4"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qh5bhFVyHtw9GADKWfeXqCM6bffF2h_F-A&s"
                  alt="Dish 5"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYRJ-dCRWVKEZhXRGPjHmLvsgHoQ40Mecpw&s"
                  alt="Dish 6"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
