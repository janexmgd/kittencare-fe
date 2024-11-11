import { useState } from "react";
import "../assets/styles/Navbar.css";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate("");
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  return (
    <nav className="flex flex-row items-center justify-between h-14 mb-2">
      <div className="flex flex-row items-center">
        <button onClick={() => navigate("/")} className="text-logo text-4xl">
          KittenCare
        </button>
      </div>
      <div className="relative flex">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white shadow-lg z-50 w-52">
            {isLogin ? (
              <ul className="divide-y divide-gray-100">
                <li className="py-2">
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="#"
                        className="block w-full px-4 py-2 text-sm font-medium text-gray-500 text-left hover:bg-gray-100 hover:text-gray-700"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="py-2">
                      <form action="#">
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-sm font-medium text-gray-500 text-left hover:bg-gray-100 hover:text-gray-700"
                        >
                          Logout
                        </button>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <ul className="divide-y divide-gray-100">
                <li className="py-2">
                  <ul className="space-y-1">
                    <li className="py-2">
                      <form action="#">
                        <button
                          type="submit"
                          className="block w-full px-4 py-2 text-sm font-medium text-gray-500 text-left hover:bg-gray-100 hover:text-gray-700"
                        >
                          Login
                        </button>
                      </form>
                    </li>
                  </ul>
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
