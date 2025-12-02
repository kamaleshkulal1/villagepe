import VillagePayDown from "../../assets/VillagePayDown.png";
import TopRight from "../../assets/TopRight.png";
import TopLeft from "../../assets/TopLeft.png";
import VideoBg from "../../assets/VideoBg.mp4";


const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-2 min-h-[600px] sm:min-h-[700px] lg:min-h-[750px] py-12 sm:py-16 lg:py-32 text-center scroll-mt-[120px] overflow-hidden"
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
      <div className="hidden sm:flex items-center absolute top-10 left-4 sm:left-10 justify-center max-w-[280px] sm:max-w-[350px] lg:max-w-[413px] h-auto sm:h-[90px] lg:h-[122px] px-2 sm:px-[9.46px]">
        <img
          src={TopLeft}
          alt="Smarter way to pay badge"
          className="h-full w-auto object-contain"
        />
      </div>


      {/* Top-right pill: TopRight image */}
      <div className="hidden sm:flex items-center absolute top-10 right-4 blur-[1.5px] sm:right-10 justify-center max-w-[280px] sm:max-w-[350px] lg:max-w-[413px] h-auto sm:h-[36px] lg:h-[46px] rounded-[12px] bg-[#FFFFFF] px-2 sm:px-[9.46px]">
        <img
          src={TopRight}
          alt="Smarter way to pay badge"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex flex-col items-center text-center text-[#0E101E] max-w-[744px] w-full mb-16 sm:mb-24 lg:mb-40 px-4 sm:px-6 lg:px-0">
        <h1
          className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[56px] font-semibold text-[#762A96] px-2 whitespace-nowrap overflow-x-auto"
          style={{
            fontFamily:
              '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Pay Bills Smarter, Faster, Safer
        </h1>
        <p
          className="mt-4 max-w-2xl text-[16px] sm:text-[20px] lg:text-[25px] font-medium text-[#0E101E] leading-relaxed px-2"
          style={{
            fontFamily:
              '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          To Quick, Secure, And Hassle-Free Bill
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Payments—All In One Smart App.
        </p>
      </div>

      {/* Bottom-right VillagePay download image (desktop only) */}
      <div className="pointer-events-none hidden sm:block absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-10">
        <img
          src={VillagePayDown}
          alt="VillagePay download"
          className="w-[200px] sm:w-[260px] md:w-[360px] lg:w-[461px] h-auto object-contain drop-shadow-md"
        />
      </div>
    </section>
  );
};

export default HomeSection;


