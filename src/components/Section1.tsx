import { ArrowUpRight } from "lucide-react";
import bg from "../assets/bg.png";
const Section1 = () => {
  return (
    <section
      id="section1"
      className="relative h-screen flex items-center md:items-start justify-center md:justify-start bg-cover bg-center bg-no-repeat w-full px-6 md:px-16 pt-20 md:pt-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative text-left text-[#F1F5F9] max-w-2xl mx-4 sm:mx-auto md:ml-24  mt-32 ">
        <h1 className="text-[18px] md:text-[22px] font-normal font-cabinet mb-4">
          Less hassle, Lower costs.
        </h1>

        {/* Split Heading into Three Lines */}
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-normal font-cabinet text-white leading-tight">
          Easy Online Suboxone
          <br />
          Treatment for Opioid
          <br />
          Addiction
        </h1>

        {/* Button Below Content */}
        <div className="mt-8 sm:mt-10 flex flex-row items-center justify-start bg-[#49C7AB] h-[46px] px-2 py-2 w-[225px] rounded-lg shadow-md hover:bg-white transition-all">
          <button className="text-[16px] text-white font-normal font-cabinet">
            Download the App Today
          </button>
          <ArrowUpRight color="white" className="ml-2 mt-1" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
