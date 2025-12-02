import VillagePayDown from "../../assets/VillagePayDown.png";
import TopRight from "../../assets/TopRight.png";
import TopLeft from "../../assets/TopLeft.png";
import VideoBg from "../../assets/VideoBg.mp4";


const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-2 min-h-[750px] py-24 lg:py-32 text-center scroll-mt-[120px] overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-20">
        <video
          src={VideoBg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      {/* Blurred side bubbles overlay to enhance depth */}
      <div className="pointer-events-none absolute inset-0 -z-0">
   
        <div className="absolute left-6 bottom-0 h-32 w-32 rounded-full bg-[#FACC15] opacity-60 blur-3xl" />
        <div className="absolute right-10 bottom-6 h-28 w-28 rounded-full bg-[#7C3AED] opacity-50 blur-3xl" />
      </div>
      {/* Top-left pill: TopLeft image */}
      <div className="hidden sm:flex items-center absolute top-10 left-4 sm:left-10 justify-center w-[413px] h-[122px]  px-[9.46px] ">
        <img
          src={TopLeft}
          alt="Smarter way to pay badge"
          className="h-full w-auto object-contain"
        />
      </div>


      {/* Top-right pill: TopRight image */}
      <div className="hidden sm:flex items-center absolute top-10 right-4 blur-[1.5px] sm:right-10 justify-center w-[413px] h-[46px] rounded-[12px] bg-[#FFFFFF]  px-[9.46px] ">
        <img
          src={TopRight}
          alt="Smarter way to pay badge"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center w-[744px] mb-40 text-center text-[#0E101E]">
        <h1
          className="text-[48px] leading-[56px] font-semibold text-[#762A96] whitespace-nowrap"
          style={{
            fontFamily:
              '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Pay Bills Smarter, Faster, Safer
        </h1>
        <p
          className="mt-4 max-w-2xl h-[86px] text-[25px]  font-medium text-[#0E101E]"
          style={{
            fontFamily:
              '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          To Quick, Secure, And Hassle-Free Bill
          <br />
          Payments—All In One Smart App.
        </p>
      </div>

      {/* Bottom-right VillagePay download image */}
      <div className="pointer-events-none absolute mt-[380px] right-20 sm:right-10">
        <img
          src={VillagePayDown}
          alt="VillagePay download"
          className="hidden sm:block w-[461px] h-[122px]  object-contain drop-shadow-md"
        />
      </div>
    </section>
  );
};

export default HomeSection;


