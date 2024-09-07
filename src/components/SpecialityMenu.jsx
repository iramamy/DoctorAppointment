import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Find by speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through our list of extensive list of trusted doctors
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll sfsdf">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              src={item.image}
              alt="Speciality image"
              className="w-16 sm:w-24 mb-2"
            />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
