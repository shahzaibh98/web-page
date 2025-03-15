
import { ArrowUpRight } from "lucide-react";
import gif from "../assets/section5.gif";

const Section5 = () => {
  return (
    <section
      id="section5"
      className="py-20 px-8 md:px-12 lg:px-16 h-auto lg:h-[675px]"
      style={{
        background: "linear-gradient(135deg, #e0f7f4 0%, #c4f0e3 100%)",
      }}
    >
      <div
        className="container mx-auto px-4 text-left lg:ml-24 flex flex-col lg:block"
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 72% center",
          backgroundColor: "transparent",
          marginRight: "50px",
          height: "auto",
          width: "100%",
        }}
      >
        <h2 className="text-[#49C7AB] font-cabinet text-center lg:text-left">
          GET SAME-DAY ONLINE
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
          <div className="text-[28px] md:text-[32px] lg:text-[35px] font-cabinet text-center lg:text-left">
            Suboxone Treatment In 10 Minutes
          </div>

          <div className="mt-4 lg:mt-3 lg:mr-36 flex flex-row justify-start bg-[#49C7AB] rounded-md px-4 py-2">
            <button className="text-[14px] text-white font-semibold font-cabinet">
              Download the App Today
            </button>
            <ArrowUpRight color="white" className="ml-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between gap-6 mt-12 font-cabinet mr-0 lg:mr-32">
          <div className="bg-white w-full max-w-[420px] lg:w-[34%] lg:h-[105px] h-auto rounded-xl border border-[#49C7AB] p-4 mx-auto lg:mx-0">
            <p className="text-[16px]">Step 1 - Download The App</p>
            <p className="text-[13px] text-opacity-55 text-black mt-1">
              Click the link to download our app to get started.
            </p>
          </div>

          <div className="bg-white w-full max-w-[420px] lg:w-[34%] lg:h-[105px] h-auto rounded-xl border border-[#49C7AB] p-4 mx-auto lg:mx-0">
            <p className="text-[16px]">
              Step 2 - Complete Onboarding Process & Documents
            </p>
            <p className="text-[13px] text-opacity-55 text-black mt-1">
              Provide medical history and sign treatment forms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between gap-6 mt-12 font-cabinet mr-0 lg:mr-32">
          <div className="bg-white w-full max-w-[420px] lg:w-[34%] lg:h-[105px] h-auto rounded-xl border border-[#49C7AB] p-4 mx-auto lg:mx-0">
            <p className="text-[16px]">Step 3 - Schedule Your First Visit</p>
            <p className="text-[13px] text-opacity-55 text-black mt-1">
              Onboarding team will send you a link to book your first meeting.
              Many times, this is the same day.
            </p>
          </div>

          <div className="bg-white w-full max-w-[420px] lg:w-[34%] lg:h-[105px] h-auto rounded-xl border border-[#49C7AB] p-4 mx-auto lg:mx-0">
            <p className="text-[16px]">Step 4 - Meet With Licensed Provider</p>
            <p className="text-[13px] text-opacity-55 text-black mt-1">
              At the time of your appointment, open the app on your phone to
              have your visit.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mr-32">
          <div className="bg-white w-full lg:max-w-[530px] max-w-[420px] md:w-[60%] lg:w-[49%] h-auto lg:h-[105px] rounded-xl border border-[#49C7AB] p-4 text-center mx-auto">
            <p className="text-[16px]">Step 5 - Pick Up Medication</p>
            <p className="text-[13px] text-opacity-55 text-black mt-1">
              Your script will be sent to your pharmacy of choice for pick-up
              the same day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
