import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Custom components
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import CalendarComponent from "../components/Calendar";
import BackArrow from "../components/BackArrow";

// Define time slots
const morningSlots = [
  "09:00 am",
  "09:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
];

const afternoonSlots = [
  "02:00 pm",
  "02:30 pm",
  "03:00 pm",
  "03:30 pm",
  "04:00 pm",
  "04:30 pm",
];

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [selectedSlot, setSelectedSlot] = useState(null);

  const fetchDocData = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocData();
  }, [doctors, docId]);

  const _setDateRange = (selection) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    setDateRange({
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };

  const submitData = () => {
    console.log(dateRange.startDate);
    console.log(selectedSlot);
  };

  return (
    <>
      {docInfo && (
        <div>
          {/* Doctor details */}
          <div className="mb-10">
            <BackArrow />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <img
                src={docInfo.image}
                alt="Doctor image"
                className="bg-primary w-full sm:max-w-72 rounded-lg"
              />
            </div>
            <div className="flex-1 border border-gray-400 rounded-lg px-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
              {/* Doctor info: name, degree, experience */}
              <p className="flex gap-2 items-center text-2xl font-medium text-gray-900">
                {docInfo.name}{" "}
                <img
                  src={assets.verified_icon}
                  alt="Verified icon"
                  className="w-5"
                />
              </p>
              <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <button className="py-0.5 px-2 border text-xs rounded-full">
                  {docInfo.experience}
                </button>
              </div>
              {/* Doctor about */}
              <div className="mt-4">
                <p className="flex gap-2 items-center text-sm font-medium text-gray-900">
                  About <img src={assets.info_icon} alt="Info icon" />
                </p>
                <p className="mt-1 text-sm text-gray-700 max-w-[700px]">
                  {docInfo.about}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  Appointment fee:{" "}
                  <span className="text-gray-900 font-medium">
                    ${docInfo.fees}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <div className="">
          <p className="gap-2 text-xl font-medium text-gray-900">
            Booking slots
          </p>
          <CalendarComponent value={dateRange} onChange={_setDateRange} />
        </div>
        <div>
          <p className="gap-2 text-xl font-medium text-gray-900">
            Choose your time
          </p>
          <p className="mt-4 font-medium text-sm text-gray-600">Morning</p>
          <div className="flex items-center gap-3 w-full mt-4 justify-between overflow-x-scroll">
            {morningSlots.map((slot, index) => (
              <span
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 px-5 border text-sm font-light rounded-full hover:bg-primary hover:text-white hover:border-none flex-shrink-0 cursor-pointer transition-all duration-200 ${
                  selectedSlot === slot ? "bg-primary text-white" : ""
                }`}
              >
                {slot}
              </span>
            ))}
          </div>

          <p className="mt-10 font-medium text-sm text-gray-600">Afternoon</p>
          <div className="flex items-center gap-3 w-full mt-4 justify-between overflow-x-scroll">
            {afternoonSlots.map((slot, index) => (
              <span
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 px-5 border text-sm font-light rounded-full hover:bg-primary hover:text-white hover:border-none flex-shrink-0 cursor-pointer transition-all duration-200 ${
                  selectedSlot === slot ? "bg-primary text-white" : ""
                }`}
              >
                {slot}
              </span>
            ))}
          </div>
          <button
            type="submit"
            onClick={submitData}
            className="py-3 px-10 border text-sm font-light rounded-full mt-10 bg-primary text-white  hover:scale-105"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Appointment;
