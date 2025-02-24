import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

//chunking
//code spliting
//dynamic bundling
//lazy loading for optimaze the code
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const Loader = () => (
  <div className="loader">
    <p>Loading...</p>
    <div className="spinner"></div>
  </div>
);

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Jenil Gajera",
    };
    setUserName(data.name);
  });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userName }}>
        <div className="app">
          <Header />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      // {
      //   path: "/grocery",
      //   element: <Grocery />,
      //   errorElement: <Error />,
      // },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Render Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
