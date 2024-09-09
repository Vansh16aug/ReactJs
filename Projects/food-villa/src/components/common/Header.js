import { useState } from "react";
import Title from "../Title";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
