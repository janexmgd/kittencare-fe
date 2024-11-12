import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setLogin] = useState(false); // This should ideally come from a global state or context

  return (
    <nav className="flex flex-row items-center justify-between h-14 mb-2 px-4">
      <div className="flex flex-row items-center">
        <Link to="/" className="text-logo text-4xl">
          KittenCare
        </Link>
      </div>
      <div className="relative flex">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white shadow-lg z-50 w-52 rounded-md overflow-hidden">
            {isLogin ? (
              <ul className="divide-y divide-gray-100">
                <li>
                  <Link
                    to="/my-profile"
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      // Handle logout logic here
                      setLogin(false);
                    }}
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-500 text-left hover:bg-gray-100 hover:text-gray-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
