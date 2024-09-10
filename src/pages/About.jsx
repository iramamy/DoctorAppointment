// Custom components
import BackArrow from "../components/BackArrow";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="mb-10">
        <BackArrow />
      </div>
      <div className="text-center text-2xl text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt="About image"
          className="w-full max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aut aliquam accusantium eveniet, quis eligendi ipsam. Aut
            dignissimos non exercitationem iste atque odio laudantium velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            magni velit facere quo esse excepturi saepe aspernatur voluptates
            sint ipsa quod aliquid dolorem, modi enim veniam sed.
          </p>
          <b className="text-gray-800">Our vision</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            provident est odit sapiente qui, hic, vitae impedit totam aut eius,
            odio repellat beatae nihil eum exercitationem. Odit maiores
            distinctio excepturi a saepe, porro sapiente dignissimos.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p className="text-gray-500 font-semibold">
          WHY <span className="text-gray-700">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer
         text-gray-600"
        >
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer
         text-gray-600"
        >
          <b>CONVENIENCE:</b>
          <p>
            Access to a netword of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div
          className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer
         text-gray-600"
        >
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
