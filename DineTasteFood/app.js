import { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Cart from "./src/components/Cart";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import ProceedToCheckout from "./src/components/ProceedToCheckout";
import PayNow from "./src/components/PayNow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading | dynamic import

const About = lazy(() => import("./src/components/About"));
const Grocery = lazy(() => import("./src/components/Grocery"));

const currYear = new Date().getFullYear();

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make a API call and send the username and password
    const data = {
      name: "TY",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container-mx">
            <Outlet />
          </main>
          <Footer />

          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/restaurants/:resId",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/footer",
//         element: <Footer />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Body /> },
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          ),
        },
        { path: "/contact", element: <Contact /> },
        { path: "/cart", element: <Cart /> },
        {
          path: "/proceedToCheckout",
          element: <ProceedToCheckout />,
        },
        { path: "/payNow", element: <PayNow /> },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: "/restaurants/:resId", element: <RestaurantMenu /> },
        { path: "/footer", element: <Footer /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
