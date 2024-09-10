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
    <div className="text-sm py-4 border-b-2 border-b-gray-200 fixed top-0 left-0 right-0 z-10  bg-white px:10 px-5 sm:px-5 md:px-20 lg:px-32">
      <div className="flex items-center justify-between">
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
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-2 hidden group-hover:block">
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
          <img
            src={assets.menu_icon}
            alt="Menu icon"
            className="w-6 md:hidden cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
          {/* Mobile menu */}
          <div
            className={` ${
              showMenu ? "fixed w-full" : "h-0 w-0"
            } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-44 " src={assets.logo} alt="Logo mobile" />
              <img
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt="Cross icon mobile"
                className="w-7 cursor-pointer"
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink to={"/"} onClick={() => setShowMenu(false)}>
                <p className="px-4 py-2 rounded inline-block">HOME</p>
              </NavLink>
              <NavLink to={"/doctors"} onClick={() => setShowMenu(false)}>
                <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
              </NavLink>
              <NavLink to={"/about"} onClick={() => setShowMenu(false)}>
                <p className="px-4 py-2 rounded inline-block">ABOUT</p>
              </NavLink>
              <NavLink to={"/contact"} onClick={() => setShowMenu(false)}>
                <p className="px-4 py-2 rounded inline-block">CONTACT</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
