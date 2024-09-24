import { useState } from "react";
import Title from "../Title";
import { Link } from "react-router-dom";
import useInternetStatus from "../../customHooks/useInternetStatus";

// const AuthenticatedHeader = () => {
//   //API call to check if user is authenticated
//   return true;
// }

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const status = useInternetStatus();
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
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {/* online offline  */}
      <div>
        <div
          className="internetStatus"
          style={{
            backgroundColor: status ? "green" : "red",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "10px",
          }}
        ></div>

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
