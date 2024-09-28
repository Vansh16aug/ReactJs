const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer bg-gray-900 text-white py-4 text-center flex flex-col items-center space-y-2">
      <p className="text-lg">
        Created with
        <i className="fa-solid fa-heart text-red-500 mx-1"></i>
        by
        <strong className="ml-1">
          Food<span className="text-yellow-400">Villa</span>
        </strong>
      </p>
      <p className="text-sm">
        <i className="fa-solid fa-copyright mr-1"></i>
        {year} FoodVilla. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
