import Product1 from "../../assets/Product1.png";
import Products2 from "../../assets/Products2.png";
import ReferalCode from "../../assets/ReferalCode.png";
import VillagePay from "../../assets/VillagePay.png";
import Gmaxepay from "../../assets/Gmaxepay.png";
import Refer from "../../assets/Refer.png";
import Farrow from "../../assets/Farrow.png";


const AboutSection = () => {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-[#FAFAFA] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20"
    >
      {/* Our Products Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
        <h1
          className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-[#0E101E] mb-3 sm:mb-4"
          style={{
            fontFamily:
              '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 600,
          }}
        >
          Our Products
        </h1>
        <p
          className="text-[16px] sm:text-[18px] lg:text-[22px] font-medium text-[#0E101E] max-w-4xl mx-auto px-2 lg:whitespace-nowrap"
          style={{
            fontFamily:
              '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Empowering Merchants With Seamless, Secure Digital Payment Infrastructure.

        </p>
      </div>

      {/* Product 1: Villagepepro */}
      <div className="mb-10 sm:mb-14 lg:mb-20 flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-7 bg-white rounded-3xl p-5 sm:p-6 lg:p-12 shadow-sm">
        <div className="w-full lg:w-[1060px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-5 sm:mb-6 lg:mb-[39.73px]">
            <img
              src={VillagePay}
              alt="VillagePay logo"
              className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] object-contain flex-shrink-0"
            />
            <h2
              className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold text-[#0E101E] leading-tight"
              style={{
                fontFamily:
                  '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              <span className="text-[#762A96]">Villagepepro:</span> The Smartest Way To Pay <span className="text-[#762A96]">(B2B)</span>
            </h2>
          </div>
          <ol className="space-y-3 sm:space-y-4 lg:space-y-[25px] ml-0 sm:ml-6 lg:ml-16 text-[#0E101E]">
            <li className="flex items-start gap-2 sm:gap-3">
              <span
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#762A96] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#762A96",
                }}
              >
                1
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Simplify Payments:
                </span>{" "}
                Streamline All Your Transactions With Ease
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#762A96] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#762A96",
                }}
              >
                2
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Maximize Savings:
                </span>{" "}
                Reduce Costs With Intelligent, Optimized Routing
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#762A96] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#762A96",
                }}
              >
                3
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Unified Gateways:
                </span>{" "}
                Villagepepro Brings All Your Payment Gateways Under <span className="block sm:inline">One Roof</span>
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#762A96] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#762A96",
                }}
              >
                4
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "14px",
                  lineHeight: "1.6",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  Smart Transaction Routing:
                </span>{" "}
                Automatically Directs Payments Through The <span className="block sm:inline">Most Cost-Effective Path For Optimal Scalability.</span>
              </span>
            </li>
          </ol>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-4 sm:mt-0">
          {/* Illustration placeholder - purple smartphone with merchant bank interface */}
          <img src={Product1} alt="Product 1" className="w-[200px] h-[230px] sm:w-[250px] sm:h-[288px] lg:w-[300px] lg:h-[345px] object-cover" />
        </div>
      </div>

      {/* Product 2: Gmaxepay */}
      <div className="mb-12 sm:mb-16 lg:mb-20 flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="w-full lg:w-[1147.08px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 sm:mb-8 lg:mb-[39.73px]">
            <div className="flex items-center gap-3">
              <img
                src={Gmaxepay}
                alt="Gmaxepay"
                className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] object-contain flex-shrink-0"
              />

              <h2
                className="text-[18px] sm:text-[22px] lg:text-[28px] font-semibold font-Montserrat text-[#E7575B]"
                style={{
                  fontFamily:
                    '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Gmaxepay: GAMXEPAY Whitelabel AEPS Solutions For Merchant (B2B)
              </h2>
            </div>


          </div>
          <ol className="space-y-4 sm:space-y-5 lg:space-y-[25px] ml-0 sm:ml-8 lg:ml-16 text-[#0E101E]">
            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#E7575B] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#E7575B",
                }}
              >
                1
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "16px",
                  lineHeight: "1.5",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Whitelabel AEPS Branding:
                </span>{" "}
                Offer AEPS Services Under Your Own Brand
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#E7575B] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#E7575B",
                }}
              >
                2
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "16px",
                  lineHeight: "1.5",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Easy Integration & Reach:
                </span>{" "}
                Smooth Web And Mobile Onboarding For All Merchants.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#E7575B] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#E7575B",
                }}
              >
                3
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "16px",
                  lineHeight: "1.5",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Secure Aadhaar-Based Transactions:
                </span>{" "}
                Safe Aadhaar-Based Withdrawals, Deposits, And Transfers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#E7575B] flex-shrink-0"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#E7575B",
                }}
              >
                4
              </span>
              <span
                className="flex-1"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "16px",
                  lineHeight: "1.5",
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Smart & Cost-Effective Management:
                </span>{" "}
                Track Transactions And Commissions In Real Time.
              </span>
            </li>
          </ol>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* Illustration placeholder - woman with smartphone showing AEPS payment */}
          <img src={Products2} alt="Product 2" className="w-[180px] h-[300px] sm:w-[200px] sm:h-[332px] lg:w-[212.92px] lg:h-[353px] object-cover" />
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="p-5 sm:p-6 lg:p-12 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full lg:w-[738px]">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-4">
              <h2
                className="text-[24px] sm:text-[30px] lg:text-[48px] font-Montserrat font-medium text-[#000000]"
                style={{
                  fontFamily:
                    '"Gilroy-SemiBold", "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Referral Code
              </h2>

              <div className="flex items-center justify-center">
                <img
                  src={Refer}
                  alt="Refer"
                  className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[64px] lg:h-[64px] object-contain"
                />
              </div>
            </div>

            <p className="text-[14px] sm:text-[16px] lg:text-[22px] text-[#000000] font-medium text-[#0E101E] mb-5 sm:mb-6 lg:mb-8 leading-relaxed">
              Refer Anyone To <span className="text-[#000000] font-medium">VillagePe</span> And Earn{" "}
              <span className="text-[#762A96] font-bold"> VillagePe Coins </span>
            </p>

            <ul className="space-y-3 sm:space-y-4 lg:space-y-[25px] text-[#0E101E] font-Montserrat text-[14px] sm:text-[16px] lg:text-[18px]">

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <img
                  src={Farrow}
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0 object-contain mt-0.5"
                />
                <span className="text-[#000000] font-regular leading-relaxed">Refer Your Friends Or Family To <span className="text-[#000000] font-semibold">VillagePe</span></span>
              </li>

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <img
                  src={Farrow}
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0 object-contain mt-0.5"
                />
                <span className="text-[#000000] font-regular leading-relaxed">Contribute To The Growth Of The<span className="text-[#000000] font-semibold"> VillagePe Community</span></span>
              </li>

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <img
                  src={Farrow}
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0 object-contain mt-0.5"
                />
                <span className="leading-relaxed">The More You Refer, The More<span className="text-[#000000] font-semibold"> VillagePe Coins </span>You Earn</span>
              </li>

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <img
                  src={Farrow}
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0 object-contain mt-0.5"
                />
                <span className="leading-relaxed">A Program Designed To <span className="text-[#000000] font-semibold">Benefit All Users</span> </span>
              </li>

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <img
                  src={Farrow}
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0 object-contain mt-0.5"
                />
                <span className="leading-relaxed">Both Referrer And New User Receive <span className="text-[#000000] font-semibold"> VillagePe Coins</span></span>
              </li>

              <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <img
                  src={Farrow}
                  alt="arrow"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px] flex-shrink-0 object-contain mt-0.5"
                />
                <span className="leading-relaxed"><span className="text-[#000000] font-semibold">High Reward</span> Potential For Every New User</span>
              </li>

            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mt-4 sm:mt-6 lg:mt-0">
            <div className="bg-[#FDF9FF] rounded-full flex items-center justify-center max-w-[250px] sm:max-w-[350px] lg:max-w-[513px] w-full aspect-square">
              <img
                src={ReferalCode}
                alt="Referral Code"
                className="w-full h-full object-contain bg-opacity-10"
              />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
