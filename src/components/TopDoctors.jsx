import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

// Custom components
import SingleDoctor from "./SingleDoctor";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900">
      <h1 className="text-3xl font-medium">Top doctors to book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through our list of extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, index) => (
          <SingleDoctor
            doctor={doctor}
            key={index}
            handleClick={() => navigate(`/appointment/${doctor._id}`)}
          />
        ))}
      </div>
      <button
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-200 hover:text-gray-800"
        onClick={() => {
          navigate("/doctors");
        }}
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
