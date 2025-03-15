import { ArrowUpRight } from "lucide-react";

const Section8 = () => {
  return (
    <section
      id="section8"
      className=" px-6 md:px-12 lg:px-16 gradient-background lg:min-h-[379px] min-h-[540px] group "
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="moving-light" />
      </div>
      <div className="container mx-auto px-4 text-left lg:ml-24 mb-6 md:mb-9">
        <div className="flex flex-col items-center justify-center mt-12 md:mt-20 lg:mt-28 lg:-ml-32">
          <div className="relative flex flex-col space-y-2 text-center lg:text-left font-cabinet text-[#000000] -mt-10 group">
            <p className="text-[20px] text-center font-normal opacity-0 translate-x-[-100%] transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
              SECURE ACCESS TO YOUR MEDICATIONS
            </p>
            <p className="text-[42px] font-semibold opacity-0 translate-x-[100%] transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
              Get Your Meds Online Today
            </p>
          </div>

          <p className="text-[#000000] text-center px-6 md:px-40 lg:px-96 font-cabinet mt-6 flex flex-col items-center justify-center">
            We have partnered with RX-Outreach to provide mail order medications
            at a fraction of the price you may find in your local pharmacy. Meet
            your chronic illness provider online today and get your medication
            as quickly as 24 hours later.
          </p>

          <div className="mt-6 flex flex-row justify-center md:justify-start bg-[#000000] rounded-md px-4 py-2 font-cabinet">
            <button className="text-white text-[14px] font-semibold">
              Get the App
            </button>
            <ArrowUpRight color="white" className="ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
