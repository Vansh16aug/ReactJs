import { Heart, Copyright, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-gray-900 text-white py-6 flex flex-col items-center space-y-2">
      <p className="text-lg flex items-center">
        Created with
        <Heart className="text-red-500 mx-1" aria-label="love" />
        by
        <strong className="ml-1">
          Goala <span className="text-yellow-400">Foods</span>
        </strong>
      </p>
      <p className="text-sm flex items-center">
        <Copyright className="mr-1" aria-label="copyright" />
        {year} FoodVilla. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/vansh-kumar16aug/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="text-white hover:text-blue-500" />
        </a>
        <a
          href="https://github.com/Vansh16aug"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="text-white hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
