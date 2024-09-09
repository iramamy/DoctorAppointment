import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Custom components
import { AppContext } from "../context/AppContext";
import { specialityData } from "../assets/assets";
import SingleDoctor from "../components/SingleDoctor";
import BackArrow from "../components/BackArrow";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="space-y-4">
      <div className="mb-10">
        <BackArrow />
      </div>
      <p className="text-gray-600">Our Specialists:</p>
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="flex flex-col gap-2 text-sm text-gray-600 ">
          <p
            className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-gray-400 hover:text-gray-800 ${
              !speciality && "bg-indigo-100 text-black"
            }`}
            onClick={() => navigate(`/doctors/`)}
          >
            All doctors
          </p>
          {specialityData.map((doctor, index) => (
            <p
              className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-gray-400 hover:text-gray-800 ${
                speciality === doctor.speciality
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
              key={index}
              onClick={() => navigate(`/doctors/${doctor.speciality}`)}
            >
              {doctor.speciality}
            </p>
          ))}
        </div>
        {filterDoc.length === 0 ? (
          <div className="text-center w-full text-gray-600 text-xl">
            No specialists
          </div>
        ) : (
          <div className="w-full grid grid-cols-auto gap-4">
            {filterDoc.map((doctor, index) => (
              <SingleDoctor
                key={index}
                doctor={doctor}
                handleClick={() => navigate(`/appointment/${doctor._id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
