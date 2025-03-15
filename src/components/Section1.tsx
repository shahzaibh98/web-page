import { ArrowUpRight } from "lucide-react";

const Section1 = () => {
  return (
    <section
      id="section1"
      className="relative h-screen flex items-center md:items-start justify-center md:justify-start bg-cover bg-center bg-no-repeat w-full px-6 md:px-16 pt-20 md:pt-32"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/964c/fd2e/c2e5346d235a643009c592008966c7e3?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dbZJJ-SxqPaqkWO81-i~-SsyKaDGGSZRN7OUZ4apOoc2dIqgeTnJ08WZ6kAmVr1-V5vUFPQaSP8FYEbF5W106UFIb7DbWmSojGN1Kgh~AfE2ylkC20bfmgIXSds8AvSPoLzGldeV4C-RamzMUGWMt~itQsZwsqbjAAJ6hhLjf8MaOo07GJf9nCfxkYiCVUmGrbBLLPuXHnhhyN~vdeYnb6DZwz5nZ5C7YdIQkvpZRwnYmKBeLfkjwe2kkafygHhzSGsHiUGOiB8U0YmS2z4fHTQjlzTbqbS6e4kDOrUVbSfZMryO3ug1jiLQQ5m0kSCShtDPYHILlGa7qeSsmdQFcQ__')`,
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
