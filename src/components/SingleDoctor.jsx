const SingleDoctor = ({ doctor, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="border border-blue-600 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
    >
      <img src={doctor.image} alt="doctor image" className="bg-blue-50" />
      <div className="p-4">
        <div className="flex items-center doctors-center gap-3 text-sm text-center text-green-500">
          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
          <p>Available</p>
        </div>
        <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
        <p className="text-gray-600 font-sm">{doctor.speciality}</p>
      </div>
    </div>
  );
};

export default SingleDoctor;
