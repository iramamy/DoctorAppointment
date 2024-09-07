import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// Custom components
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left section */}
        <div className="space-y-5">
          <img
            className="w-40 cursor-pointer"
            src={assets.logo}
            alt="Footer logo"
            onClick={() => navigate("/")}
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            a earum corrupti, perspiciatis perferendis voluptas hic
            necessitatibus! Architecto aspernatur culpa, vitae totam!
          </p>
        </div>

        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to={"/"}>
              <li className="hover:text-gray-800">Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="hover:text-gray-800">About us</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="hover:text-gray-800">Contact us</li>
            </NavLink>
            <NavLink>
              <li className="hover:text-gray-800">Privacy Policy</li>
            </NavLink>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+(123)-3-456-789</li>
            <li>example@example.com</li>
          </ul>
        </div>
      </div>

      {/* Copy right */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2024@ Prescipto - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
