import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BiLeftArrowAlt
        size={30}
        cursor={`pointer`}
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default BackArrow;
