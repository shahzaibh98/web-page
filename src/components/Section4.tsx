import { ArrowLeft, ArrowRight } from "lucide-react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { useState } from "react";

const Section4 = ({ totalStars = 5 }) => {
  const [activeIcon, setActiveIcon] = useState("right");
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);

  return (
    <section id="section4" className="py-8  px-6 md:px-10 lg:px-36 h-auto">
      <div className="container mx-auto px-4 text-left font-cabinet">
        <h2 className="text-[#49C7AB] text-[20px]">OUR CLIENT'S</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-[30px] md:text-[35px]">Testimonials</div>
          <div className="mt-3 md:mt-0 flex flex-row gap-2 px-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all border ${
                activeIcon === "left"
                  ? "bg-[#49C7AB] text-white border-[#49C7AB]"
                  : "border-gray-400 text-gray-500"
              }`}
              onClick={() => setActiveIcon("left")}
            >
              <ArrowLeft strokeWidth={1.5} size={22} />
            </div>

            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all border ${
                activeIcon === "right"
                  ? "bg-[#49C7AB] text-white border-[#49C7AB]"
                  : "border-gray-400 text-gray-500"
              }`}
              onClick={() => setActiveIcon("right")}
            >
              <ArrowRight strokeWidth={1.5} size={22} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-10 mb-6">
          {[
            {
              description:
                "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
              name: "Nicholas O.",
              img: image1,
            },
            {
              description:
                "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
              name: "Christine M.",
              img: image2,
            },
            {
              description:
                "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
              name: "Heather B.",
              img: image3,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card flex flex-col justify-between items-stretch rounded-xl p-6 min-h-[250px] bg-white shadow-lg border w-full md:w-[48%] lg:w-[32%]"
            >
              <div className="card_title">
                <div className="flex gap-1 cursor-pointer mb-3">
                  {[...Array(totalStars)].map((_, i) => {
                    const starValue = i + 1;
                    return (
                      <span
                        key={starValue}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        style={{
                          fontSize: "32px",
                          color:
                            starValue <= (hover || rating)
                              ? "#FFD700"
                              : "#C0C0C0",
                          transition: "color 0.2s ease-in-out",
                        }}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
                <p className="text-gray-600 text-[16px]">{item.description}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={item.img}
                    alt="image"
                    className="rounded-full w-[55px] h-[55px]"
                    loading="lazy"
                  />
                  <p className="ml-3 text-[18px] font-semibold">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
