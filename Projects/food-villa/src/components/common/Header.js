import { useState } from "react";
import Title from "../Title";
import { Link } from "react-router-dom";

// const AuthenticatedHeader = () => {
//   //API call to check if user is authenticated
//   return true;
// }

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsAuthenticated(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
