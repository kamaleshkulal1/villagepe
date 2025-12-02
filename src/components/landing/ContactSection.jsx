const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-8 sm:py-10 bg-[#FAFAFA]"
    >
      <div className="w-[95%] mx-auto bg-[#F9ECFF] rounded-3xl p-6 sm:p-8 lg:p-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-[180px]">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2
              className="text-[#0E101E] text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4 sm:mb-6 lg:mb-[28px]"
              style={{
                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Stay Connected.
            </h2>
            <p
              className="text-[#000000] text-[16px] sm:text-[18px] font-normal"
              style={{
                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Subscribe For Updates, Helpful Insights, And Upcoming Releases.
            </p>
          </div>

          {/* Right Side - Email Input and Subscribe Button */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <form className="relative w-full max-w-[516px]">
              <input
                type="email"
                placeholder="Enter The Email"
                className="w-full px-4 pr-[100px] sm:pr-[130px] lg:pr-[205px] h-[60px] sm:h-[70px] lg:h-[86px] rounded-lg text-[14px] sm:text-[16px] text-[#0E101E] placeholder:text-gray-400 focus:outline-none"
                style={{
                  fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  border: "0.5px solid #0E101ECC",
                  background: "linear-gradient(93.82deg, #FDF9FF 1.34%, #F9ECFF 27.84%)",
                }}
              />
              <button
                type="submit"
                className="absolute bg-[#762A96] text-white rounded-lg font-semibold hover:bg-[#5a1f73] transition whitespace-nowrap flex items-center justify-center text-[14px] sm:text-[16px] px-3 sm:px-4 w-[90px] sm:w-[120px] lg:w-[197px] h-[44px] sm:h-[46px] lg:h-[50px] right-[6px] sm:right-[7px] lg:right-[8px] top-1/2 -translate-y-1/2"
                style={{
                  fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


