import { useContext, useState } from "react";
import Title from "../Title";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import useInternetStatus from "../../customHooks/useInternetStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const status = useInternetStatus();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  const location = useLocation(); // Get the current location

  return (
    <header className="flex items-center justify-between p-2 shadow-md">
      {/* Logo section */}
      <Title />

      {/* Navigation links */}
      <nav>
        <ul className="flex items-center space-x-6 text-black text-lg">
          <li>
            <Link
              to="/"
              className={`hover:text-gray-300 transition-colors duration-300 p-2 ${
                location.pathname === "/" ? "bg-gray-200 rounded-lg" : ""
              }`} // Apply bg color if active
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-gray-300 transition-colors duration-300 p-2 ${
                location.pathname === "/about" ? "bg-gray-200 rounded-lg" : ""
              }`} // Apply bg color if active
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-gray-300 transition-colors duration-300 p-2 ${
                location.pathname === "/contact" ? "bg-gray-200 rounded-lg" : ""
              }`} // Apply bg color if active
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`hover:text-gray-300 transition-colors duration-300 p-2 ${
                location.pathname === "/cart" ? "bg-gray-200 rounded-lg" : ""
              }`} // Apply bg color if active
            >
              Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </Link>
          </li>
          <li>
            <Link
              to="/instamart"
              className={`hover:text-gray-300 transition-colors duration-300 p-2 ${
                location.pathname === "/instamart"
                  ? "bg-gray-200 rounded-lg"
                  : ""
              }`} // Apply bg color if active
            >
              Instamart
            </Link>
          </li>
        </ul>
      </nav>

      {/* Internet Status & Auth Button */}
      <div className="flex items-center space-x-4">
        {/* Online/offline indicator */}
        <div
          className={`internetStatus ${
            status ? "bg-green-500" : "bg-red-500"
          } w-4 h-4 rounded-full`}
          title={status ? "Online" : "Offline"}
        ></div>
        <div className="font-mono">{user.name}</div>

        {/* Authentication button */}
        {isAuthenticated ? (
          <button
            className="bg-slate-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-slate-300 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            onClick={() => setIsAuthenticated(true)}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
