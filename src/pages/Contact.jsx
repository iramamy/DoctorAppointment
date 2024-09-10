// Custom components
import BackArrow from "../components/BackArrow";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="mb-10">
        <BackArrow />
      </div>
      <div className="text-center text-2xl text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          src={assets.contact_image}
          alt="Contact image"
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <p className="font-semibold text-lg">OUR OFFICE</p>
          <p className="text-gray-500">
            54706 Streat road 450, <br /> California, USA
          </p>
          <p className="text-gray-500">
            Tel: (+1) 23-456-78-9 <br />
            Email: example@text.com
          </p>
          <p className="font-semibold text-lg">CARREERS AT PRESCRIPTO</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black py-3 px-4 hover:bg-black hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
