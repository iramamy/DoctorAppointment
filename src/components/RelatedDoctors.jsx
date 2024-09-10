import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

// Custom components
import SingleDoctor from "./SingleDoctor";

const RelatedDoctors = ({ docId, speciality }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [relatedDoc, setRelatedDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const _doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id != docId
      );
      setRelatedDoc(_doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
      {relatedDoc.slice(0, 5).map((doctor, index) => (
        <SingleDoctor
          doctor={doctor}
          key={index}
          handleClick={() => navigate(`/appointment/${doctor._id}`)}
        />
      ))}
    </div>
  );
};

export default RelatedDoctors;
