import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlinestatus = useOnlineStatus();
  const { LoggedInUser } = useContext(UserContext);

  // Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-100 shadow-lg">
      <div className="logo-container">
        <img className="w-36 h-23.5" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 py-1 m-4 items-center space-x-6">
          <li className="px-4">Online Status: {onlinestatus ? "😁" : "😣"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="relative flex items-center">
              {/* Food-related Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-orange-500"
              >
                <path d="M9 20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7 4h14l-1.34 6.39A3.01 3.01 0 0 1 16.78 13H8.79l-.6 3h11.21a1 1 0 1 1 0 2H7a1 1 0 0 1-1-.78L4.22 4H2a1 1 0 1 1 0-2h3a1 1 0 0 1 1 .78L7 4zm11.87 6L20 6H8.41l1.33 6H17.87z" />
              </svg>

              {/* Cart Item Count */}
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <button
            className="px-4 bg-green-400 rounded-lg py-1 hover:bg-green-600"
            onClick={() =>
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>
          <li className="px-4">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
