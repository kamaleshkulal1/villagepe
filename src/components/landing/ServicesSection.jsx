import { useState, useRef, useEffect } from "react";
import Kotak from "../../assets/Kotak.png";
import YesBank from "../../assets/YesBank.png";
import BillAvenue from "../../assets/BillAvenue.png";
import BharathBillPay from "../../assets/BharathBillPay.png";
import JRITech from "../../assets/JRITech.png";
import Recharge from "../../assets/Recharge.png";
import FastTag from "../../assets/FastTag.png";
import DTHRECHARGE from "../../assets/DTHRECHARGE.png";
import MobileRecharge from "../../assets/MobileRecharge.png";
import Electricity from "../../assets/Electricity.png";
import LpgGas from "../../assets/LpgGas.png";
import PipedGas from "../../assets/PipedGas.png";
import Water from "../../assets/Water.png";
import Education from "../../assets/Education.png";
import BoardBand from "../../assets/BoardBand.png";
import Rental from "../../assets/Rental.png";
import MobilePostpaid from "../../assets/MobilePostpaid.png";
import LandLine from "../../assets/LandLine.png";
import Insurance from "../../assets/Insurance.png";
import LoanRepayment from "../../assets/LoanRepayment.png";
import Tax from "../../assets/Tax.png";
import RecurringDeposit from "../../assets/RecurringDeposit.png";
import CreditCardBill from "../../assets/CreditCardBill.png";
import MunicipalService from "../../assets/MunicipalService.png";
import HousingSociety from "../../assets/HousingSociety.png";
import Hospital from "../../assets/Hospital.png";
import ClubAssociation from "../../assets/ClubAssociation.png";
import Donation from "../../assets/Donation.png";
import Echallan from "../../assets/Echallan.png";
import EVRecharge from "../../assets/EVRecharge.png";
import PensionSystem from "../../assets/PensionSystem.png";
import SubscriptionFees from "../../assets/SubscriptionFees.png";


const partners = [
  { src: Kotak, alt: "Kotak partner logo" },
  { src: YesBank, alt: "YES Bank partner logo" },
  { src: BillAvenue, alt: "BillAvenue partner logo" },
  { src: BharathBillPay, alt: "Bharat BillPay partner logo" },
  { src: JRITech, alt: "Jri Technologies partner logo" },
];

const tabs = [
  { id: "recharge", label: "Recharge" },
  { id: "bill", label: "Bill Payments" },
  { id: "banking", label: "Banking" },
  { id: "others", label: "Others" },
];

const servicesByTab = {
  recharge: [
    { title: "Mobile Recharge", icon: MobileRecharge, iconAlt: "Mobile recharge icon" },
    { title: "DTH Recharge", icon: DTHRECHARGE, iconAlt: "DTH recharge icon" },
    { title: "Fast Tag", icon: FastTag, iconAlt: "Fast Tag icon" },
    { title: "Mobile Recharge", icon: Recharge, iconAlt: "Mobile TV recharge icon" },
  ],
  bill: [
    { title: "Electricity Bill", icon: Electricity, iconAlt: "Electricity bill icon" },
    { title: "LPG Gas", icon: LpgGas, iconAlt: "LPG gas bill icon" },
    { title: "Piped Gas", icon: PipedGas, iconAlt: "Piped gas bill icon" },
    { title: "Water Bill", icon: Water, iconAlt: "Water bill icon" },
    { title: "Education Fees", icon: Education, iconAlt: "Education fees icon" },
    { title: "Broadband", icon: BoardBand, iconAlt: "Broadband bill icon" },
    { title: "Rental", icon: Rental, iconAlt: "Rental bill icon" },
    { title: "Mobile Postpaid", icon: MobilePostpaid, iconAlt: "Mobile postpaid bill icon" },
    { title: "Landline", icon: LandLine, iconAlt: "Landline bill icon" },
    { title: "Insurance", icon: Insurance, iconAlt: "Insurance premium icon" },
  ],
  banking: [
    {
      title: "Loan Repayment",
      icon: LoanRepayment,
      iconAlt: "Loan repayment icon",
    },
    {
      title: "Tax Payment",
      icon: Tax,
      iconAlt: "Tax payment icon",
    },
    {
      title: "Recurring Deposit",
      icon: RecurringDeposit,
      iconAlt: "Recurring deposit icon",
    },
    {
      title: "Credit Card Bill",
      icon: CreditCardBill,
      iconAlt: "Credit card bill icon",
    },
  ],
  others: [
    {
      title: "Municipal Service",
      icon: MunicipalService,
      iconAlt: "Municipal service icon",
    },
    {
      title: "Housing Society",
      icon: HousingSociety,
      iconAlt: "Housing society icon",
    },
    {
      title: "Hospital",
      icon: Hospital,
      iconAlt: "Hospital payments icon",
    },
    {
      title: "Club Association",
      icon: ClubAssociation,
      iconAlt: "Club association icon",
    },
    {
      title: "Donation",
      icon: Donation,
      iconAlt: "Donation payments icon",
    },
    {
      title: "E-Challan",
      icon: Echallan,
      iconAlt: "E-Challan icon",
    },
    {
      title: "EV Recharge",
      icon: EVRecharge,
      iconAlt: "EV recharge icon",
    },
    {
      title: "Pension System",
      icon: PensionSystem,
      iconAlt: "Pension system icon",
    },
    {
      title: "Subscription Fees",
      icon: SubscriptionFees,
      iconAlt: "Subscription fees icon",
    },
  ],
};

const ServicesSection = () => {
  // Duplicate list for seamless marquee effect
  const marqueePartners = [...partners, ...partners];
  const [activeTab, setActiveTab] = useState("recharge");
  const [isAnimating, setIsAnimating] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 60 });
  const tabRefs = useRef({});
  const tabsContainerRef = useRef(null);
  const services = servicesByTab[activeTab] ?? servicesByTab.recharge;

  // Update underline position when activeTab changes
  useEffect(() => {
    const updateUnderlinePosition = () => {
      const activeTabElement = tabRefs.current[activeTab];
      const containerElement = tabsContainerRef.current;

      if (activeTabElement && containerElement) {
        const containerRect = containerElement.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        const left = tabRect.left - containerRect.left;
        const width = tabRect.width;
        
        // On mobile, use full tab width; on larger screens, use centered 60px
        const isMobile = window.innerWidth < 640;
        const underlineWidth = isMobile ? width : 60;
        const underlineLeft = isMobile ? left : left + (width / 2) - 30;

        setUnderlineStyle({
          left: underlineLeft,
          width: underlineWidth,
        });
      }
    };

    updateUnderlinePosition();

    // Update on window resize
    window.addEventListener("resize", updateUnderlinePosition);
    return () => window.removeEventListener("resize", updateUnderlinePosition);
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tabId);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 250);
    }
  };

  return (
    <div className="bg-[#FAFAFA] px-4 py-12">
      <div className="w-full mx-auto">
        <h2
          className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#0E101E] font-semibold mb-6 sm:mb-10 text-center px-4"
          style={{
            fontFamily:
              '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Our Partners
        </h2>

        {/* Partners marquee */}
        <div className="relative overflow-hidden h-[160px] sm:h-[200px] lg:h-[220px] flex items-center">
          <div className="animate-marquee whitespace-nowrap flex gap-4 sm:gap-6">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="inline-flex bg-white rounded-[20px] sm:rounded-[24px] shadow-md hover:shadow-lg transition duration-450 h-[120px] sm:h-[160px] lg:h-[180px] w-[240px] sm:w-[280px] lg:w-[320px] items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Payments Services block below partners */}
        <div
          className="mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-4 rounded-[20px] sm:rounded-[24px]"
          style={{
            background:
              "linear-gradient(90deg, #F9ECFF 0%, #FDF9FF 50%, #FFFFFF 100%)",
          }}
        >
          <div className="w-full">
            <h3
              className="text-[24px] sm:text-[32px] lg:text-[48px] text-[#0E101E] font-semibold mb-4 sm:mb-5 lg:mb-6 text-center sm:text-left px-2 sm:px-0"
              style={{
                fontFamily:
                  '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Payments Services
            </h3>

            {/* Tabs */}
            <div
              ref={tabsContainerRef}
              className="relative flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-8 mb-5 sm:mb-6 lg:mb-8 text-[14px] sm:text-[16px] lg:text-[20px] px-2 sm:px-0 overflow-x-auto pb-1"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => (tabRefs.current[tab.id] = el)}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative pb-2 focus:outline-none transition-colors duration-300 ${isActive ? "text-[#762A96]" : "text-[#0E101E]"
                      }`}
                  >
                    <span
                      className={
                        isActive
                          ? "font-semibold"
                          : "font-normal hover:text-[#762A96]"
                      }
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
              {/* Animated underline */}
              <span
                className="absolute bottom-0 h-[2px] sm:h-[2.5px] lg:h-[3px] rounded-full bg-[#762A96] transition-all duration-500 ease-in-out"
                style={{
                  left: `${underlineStyle.left}px`,
                  width: `${underlineStyle.width}px`,
                }}
              />
            </div>

            {/* Cards */}
            <div
              className={`mt-4 sm:mt-5 lg:mt-4 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-10 transition-all duration-500 ease-in-out ${isAnimating
                ? "opacity-0 translate-y-4 scale-95"
                : "opacity-100 translate-y-0 scale-100"
                }`}
            >
              {services.map((service, index) => (
                <div
                  key={`${activeTab}-${index}-${service.title}`}
                  className={`bg-white rounded-md hover:shadow-sm transition-all duration-300 h-[140px] sm:h-[170px] lg:h-[200px] w-[calc(50%-6px)] sm:w-[calc(50%-8px)] lg:w-[280px] flex flex-col items-center justify-center border border-[#F1E6FF] ${isAnimating ? "" : "animate-fadeInUp"
                    }`}
                  style={{
                    animationDelay: isAnimating ? "0ms" : `${index * 50}ms`,
                  }}
                >
                  {service.icon ? (
                    <img
                      src={service.icon}
                      alt={service.iconAlt || service.title}
                      className="mb-2 sm:mb-3 lg:mb-4 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] lg:h-[64px] lg:w-[64px] object-contain"
                    />
                  ) : (
                    <div className="mb-2 sm:mb-3 lg:mb-4 h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-xl border border-[#762A96] flex items-center justify-center text-[#762A96] text-base sm:text-lg lg:text-xl">
                      ₹
                    </div>
                  )}
                  <p
                    className="text-[14px] sm:text-[16px] lg:text-[22px] font-medium text-[#0E101E] text-center px-1 sm:px-2"
                    style={{
                      fontFamily:
                        '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                  >
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;


