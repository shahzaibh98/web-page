import { Play } from "lucide-react";
import { useState } from "react";
import bg from "../assets/bg.png";
const Section3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("customVideo") as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="section3" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center font-cabinet">
        {/* Left Side - Content */}
        <div className="w-full md:w-[45%] text-left px-6 md:px-10 lg:ml-28 md:ml-10">
          <h2 className="text-lg font-normal mb-2 text-[#49C7AB] font-cabinet">
            WELCOME TO RECOVERY DELIVERED
          </h2>
          <h2 className="text-[40px] font-semibold mb-2 font-cabinet">
            Your Fully Online Suboxone Treatment Platform
          </h2>
          <p className="text-md text-gray-700 font-cabinet">
            100% online opioid treatment with licensed buprenorphine providers
            starts at just $99/month. <br /> <br />
            With monthly and weekly meetings based on where you are in your
            recovery. Get a same-day appointment and script.
          </p>
        </div>

        {/* Right Side - Video with Play Button */}
        <div className="w-full md:w-[45%] flex justify-center mt-6 md:mt-0 ml-20">
          <div
            className="relative lg:w-[800px] h-[300px]  md:w-[450px] rounded-lg mr-32"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Video Element */}
            <video
              id="customVideo"
              className="w-full h-full rounded-lg shadow-lg"
              poster="/video-thumbnail.jpg"
              onClick={handlePlay}
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay (Shows Only If Not Playing) */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
              >
                <div className="bg-purple-600 p-4 rounded-full shadow-lg hover:bg-purple-700 transition">
                  <Play size={40} className="text-white" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
