
const Section2 = () => {
  return (
    <section
      id="about-us"
      className="relative h-auto bg-cover bg-center bg-no-repeat flex flex-col md:flex-row"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/997b/ed32/56a5a7e27ef6e54f34d70b38d40915fe?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U1lId-yzvj0JPfhOYMAzSAKT0R3ec8c8dGnhq5KvrEglAS-y2dxqwRar3wDiWZhLzoEwmgMeZsKPtQ9MGNRXxbKu9CCzynm93SeaFGUTNK76PZA8w~1Qei2iXMg0dOcOgQkfpwmjec8nWpOneEYVw0DljlHCozW3Z57QHHKKUPe0Rbe7kKV~BxUmsWhUpEzzcCDJ1GE6Imua344VOgIYRqBXTwvR3IzeJHcwOPZy3dW-BTvaICIOyGTFzOI50-JO62RBceBhV2V4UvxodMb99q3rcv7wOWrATX4Mc2Gewzgz8HylHHMB4MgKUr1kpBWpYWOQOrmg8exuZWZZMEiQiQ__')`,
      }}
    >
      {/* Cream Blend Overlay */}
      <div className="absolute inset-0 bg-[#f5e6cc] opacity-85 mix-blend-overlay"></div>

      {/* Black Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Left Section */}
      <div className="relative w-full md:w-[35%] flex items-center justify-center px-6 md:px-12 md:ml-32 font-cabinet py-10 md:py-0">
        <div className="text-left max-w-md text-black py-10">
          <h2 className="text-[32px] md:text-[40px] font-normal mb-4">
            Breaking Barriers to Recovery
          </h2>
          <p className="text-md text-gray-600 font-cabinet">
            Our mission is to make Medication Assisted Treatment accessible to
            people in both major cities and rural communities. We’re deeply
            committed to removing obstacles to recovery, ensuring our clients
            get the support they need.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[65%] flex flex-col justify-center items-center px-6 py-10 md:py-10">
        <p className="text-md font-cabinet lg:text-start md:ml-32 md:mr-20 sm:ml-20  text-gray-700 ">
          We’re not just offering a service; we’re creating a lifeline. Our
          platform is designed to eliminate the challenges that often stand in
          the way of recovery—whether it’s stigma, inconvenience, or lack of
          access to quality care.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mt-10 md:mt-14 font-cabinet text-center md:text-start">
          <div className="text-black">
            <div className="text-[32px] md:text-[37px] font-normal text-[#008080]">
              500+
            </div>
            <div className="text-lg mt-3 font-cabinet">Patients Treated</div>
          </div>
          <div className="text-black">
            <div className="text-[32px] md:text-[37px] font-normal text-[#008080]">
              300+
            </div>
            <div className="text-lg mt-3 font-cabinet">Centers Nationwide</div>
          </div>
          <div className="text-black">
            <div className="text-[32px] md:text-[37px] font-normal text-[#008080]">
              4.9/5
            </div>
            <div className="text-lg mt-3 font-cabinet">
              Patient Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
