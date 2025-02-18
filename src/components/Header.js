import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlinestatus = useOnlineStatus();
  const {LoggedInUser} = useContext(UserContext)
  console.log(LoggedInUser)

  return (
    <div className="flex justify-between bg-blue-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-39 h-23.5 " src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 py-1">
            Online Status: {onlinestatus ? "😁" : "😣"}{" "}
          </li>
          <li className="px-4 py-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 py-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-1">
            <Link to="/grocery ">Grocery</Link>
          </li>
          <li className="px-4 py-1">Cart</li>
          <button
            className="px-4 bg-green-400 rounded-lg py-1 hover:bg-green-600"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{LoggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
