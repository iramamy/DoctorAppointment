import { useContext } from "react";

// Custom components
import BackArrow from "../components/BackArrow";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <BackArrow />
      <div>
        <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
          My Appointments
        </p>
        <div>
          {doctors.slice(0, 2).map((doctor, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={doctor.image}
                  alt="Doctor image"
                />
              </div>
              <div className="flex-1  text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold ">{doctor.name}</p>
                <p>{doctor.speciality}</p>
                <p className="text-neutral-700 font-medium mt-1">Address:</p>
                <p className="text-xs">{doctor.address.line1}</p>
                <p className="text-xs">{doctor.address.line2}</p>
                <p className="text-xs mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date & Time:
                  </span>{" "}
                  25 Aug 2024 | 10:00 pm
                </p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end">
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                  Pay Online
                </button>
                <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
