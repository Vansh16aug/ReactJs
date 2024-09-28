import { foodFireLogo } from "../constants";

const Title = () => (
  <div className="logo-container flex items-center p-4">
    <a href="/">
      <img
        className="logo h-12 w-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
        src={foodFireLogo}
        alt="Food Fire Logo"
      />
    </a>
  </div>
);

export default Title;
