import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <section id="footer" className="relative flex flex-col mt-8">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="relative w-full md:w-[40%] flex items-center justify-center px-6 md:ml-20">
          <div className="text-left max-w-md text-gray-600 md:text-start">
            <h2 className="text-[58px] font-semibold mb-4 text-[#008080] font-cabinet">
              LOGO
            </h2>
            <p className="text-md">
              Experience The Convenience Of Recovery Delivered, Your Trusted
              Source For Online Medication Delivery. We Bring The Pharmacy To
              Your Doorstep, Ensuring Fast, Discreet, And Reliable Services,
              Whether You're Managing A Chronic Condition Or Need A One-Time
              Prescription Filled, We Make The Process Simple And Hassle-Free.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[60%] flex flex-col justify-center items-center mt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-28 w-full px-8 md:px-0">
            {/* Quick Links */}
            <div className="text-start text-gray-600 lg:ml-16 font-cabinet">
              <div className="text-xl text-[#49C7AB] py-3">Quick Links</div>
              <div className="text-sm py-2.5">Home</div>
              <div className="text-sm py-2.5">About Us</div>
              <div className="text-sm py-2.5">Owners</div>
              <div className="text-sm py-2.5">Tenants</div>
              <div className="text-sm py-2.5">Properties</div>
            </div>

            {/* Other Links */}
            <div className="text-start text-gray-600 lg:ml-6 font-cabinet">
              <div className="text-xl text-[#49C7AB] py-3">Other Links</div>
              <div className="text-sm py-2.5">Online Medications</div>
              <div className="text-sm py-2.5">Download App</div>
              <div className="text-sm py-2.5">Start Treatment</div>
              <div className="text-sm py-2.5">Online Urgent Care</div>
              <div className="text-sm py-2.5">FAQ</div>
            </div>

            {/* Contact Section */}
            <div className="text-start text-gray-600 mr-28 font-cabinet">
              <div className="text-xl text-[#49C7AB] py-3">Contact</div>
              <div className="text-sm py-2.5 flex items-center gap-1">
                <Phone size={15} />
                <p>1-866-757-9868</p>
              </div>

              {/* Social Media */}
              <div className="text-xl text-[#49C7AB] py-4">Social Media</div>
              <div className="text-sm py-2.5 flex flex-row gap-5">
                {/* Social Media Icons */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#4A5A6A"
                    d="M23.953 4.57a10.093 10.093 0 0 1-2.825.775 4.924 4.924 0 0 0 2.165-2.725 9.963 9.963 0 0 1-3.127 1.184 4.91 4.91 0 0 0-8.384 4.482A13.941 13.941 0 0 1 1.64 3.153a4.822 4.822 0 0 0-.663 2.475c0 1.71.87 3.213 2.188 4.096A4.902 4.902 0 0 1 .964 9.27v.061a4.92 4.92 0 0 0 3.946 4.827 4.958 4.958 0 0 1-2.213.084 4.93 4.93 0 0 0 4.6 3.417A9.875 9.875 0 0 1 0 19.54 13.945 13.945 0 0 0 7.548 21c9.142 0 14.307-7.5 14.307-14.002 0-.214-.005-.426-.014-.636a10.157 10.157 0 0 0 2.5-2.592z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#4A5A6A"
                    d="M17.525 1.5h-3.25a4.775 4.775 0 0 0-4.775 4.775V9h-2.75v3.5h2.75V22h3.5v-9.5h2.917l.583-3.5h-3.5V6.525c0-.679.546-1.225 1.225-1.225h2.525V1.5z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill="#4A5A6A"
                    d="M23.498 6.186a2.956 2.956 0 0 0-2.08-2.09C19.046 3.5 12 3.5 12 3.5s-7.046 0-9.418.596A2.956 2.956 0 0 0 .502 6.186 31.38 31.38 0 0 0 0 12c0 1.935.159 3.879.502 5.814a2.956 2.956 0 0 0 2.08 2.09C4.954 20.5 12 20.5 12 20.5s7.046 0 9.418-.596a2.956 2.956 0 0 0 2.08-2.09c.343-1.935.502-3.879.502-5.814s-.159-3.879-.502-5.814zM9.75 15.375v-6.75l6.5 3.375-6.5 3.375z"
                  />
                </svg>
              </div>

              <div className="text-xs py-7 font-cabinet">
                Designed And Developed By Ropstam
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-6 md:ml-36 w-[90%] md:w-[83%] border-t border-gray-300 mt-8"></div>
      <p className="text-start md:text-start text-gray-600 mt-6 mb-4 text-sm ml-6 md:ml-36 font-cabinet">
        ©2024 – Recovery Delivered | All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
