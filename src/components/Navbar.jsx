import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

// Custom components
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="text-sm py-4 mb-5 border-b border-b-gray-200 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="sm:px-10 md:px-16 lg:px-32 flex items-center justify-between mx-3">
        <img
          src={assets.logo}
          alt="logo image"
          className="w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex items-start gap-5 font-medium ">
          <NavLink to="/">
            <li className="py-1 ">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1 ">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 ">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 ">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                src={assets.profile_pic}
                alt="profile picture"
                className="w-8 rounded-full"
              />
              <img
                src={assets.dropdown_icon}
                alt="dropdown icon"
                className="w-2.5"
              />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-10 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => navigate("/my-profile")}
                  >
                    My Profile
                  </p>
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => navigate("/my-appointments")}
                  >
                    My Appointments
                  </p>
                  <p
                    className="hover:text-black cursor-pointer"
                    onClick={() => setToken(false)}
                  >
                    Log out
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create account
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
