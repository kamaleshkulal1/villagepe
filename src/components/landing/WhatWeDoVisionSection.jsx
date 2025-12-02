import React from "react";
import Wedo1 from "../../assets/Wedo1.png";
import Wedo2 from "../../assets/Wedo2.png";


const WhatWeDoVisionSection = () => {
  return (
    <div id="about-us" className="w-full py-8 sm:py-10 scroll-mt-20">
      <h2
        className="text-center text-[#0E101E] text-[32px] sm:text-[40px] lg:text-[48px] font-semibold mb-6 sm:mb-8 lg:mb-10 px-4"
      >
        What We Do
      </h2>
      {/* Single Card Container for Both Sections */}
      <div className="w-[95%] mx-auto bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10">
        {/* WHAT WE DO */}


        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Image on Left with Purple Circular Background */}
          <div className="flex justify-center items-center w-full lg:w-[40%]">
            <div className="relative">
              <div
                className="absolute inset-0 bg-[#F9ECFF] rounded-full blur-3xl opacity-60"
                style={{ width: "min(100%, 300px)", height: "min(100%, 300px)" }}
              ></div>
              <img
                src={Wedo1}
                alt="Illustration"
                className="relative w-[200px] sm:w-[250px] lg:w-[350px] z-10"
              />
            </div>
          </div>

          {/* Text on Right */}
          <div className="w-full lg:w-[60%]">
            <p
              className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#0E101E]"
              style={{
                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              <strong>Villagepe</strong>, Our Mission Is Clear To Simplify
              Digital Transactions And Make Financial Services More Inclusive.
              We Believe That Technology Should Empower People, Not Complicate
              Their Lives. That's Why We've Built A Platform {" "}
              <strong>Where Simplicity Meets Security</strong>, Offering A One-Stop
              Solution For All Your Payment Needs.
            </p>

            <p
              className="mt-4 sm:mt-5 text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#0E101E]"
              style={{
                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Whether It's Paying Bills, Or Managing Everyday Transactions,
              Villagepe Ensures The Process Is{" "}
              <strong>Effortless, Fast, And Secure.</strong> We Understand That
              Financial Inclusion Is Not Just About Access—{" "}
              <strong>It's About Trust, Convenience, And Empowering Communities</strong> To
              Thrive In The Digital Economy.
            </p>
          </div>
        </div>

        {/* Divider between sections */}
        <div className="my-8 sm:my-10 h-px" />

        {/* OUR VISION */}
        <h2 className="text-left text-[#0E101E] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0" style={{ fontFamily: '"Gilroy-SemiBold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
          Our Vision
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12">
          {/* Text on Left */}
          <div className="w-full lg:w-[60%]">
            <p
              className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#0E101E]"
              style={{
                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              We Envision A Future Where Every Household, From Bustling Cities
              To The Most <strong>Remote Villages</strong>, Can Confidently
              Embrace Digital Payments. By Bridging The Gap Between Modern
              Fintech Solutions And Grassroots Communities, <strong>Villagepe</strong>  Is
              Committed To Making{" "}
              <strong>Financial Services Accessible</strong> To All.
            </p>

            <p
              className="mt-4 sm:mt-5 text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#0E101E]"
              style={{
                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Villagepe Is A Proud Brand Of Gmaxepay Fintech Solutions Pvt Ltd,
              A Company Dedicated To Innovation In Financial Technology. With
              Expertise In AEPS, CMS, POS Services.
            </p>
          </div>

          {/* Image on Right with Purple Circular Background */}
          <div className="flex justify-center items-center w-full lg:w-[40%] lg:mt-0 mt-4">
            <div className="relative">
              <div
                className="absolute inset-0 bg-[#F9ECFF] rounded-full blur-3xl opacity-60"
                style={{ width: "min(100%, 300px)", height: "min(100%, 300px)" }}
              ></div>
              <img
                src={Wedo2}
                alt="Award"
                className="relative w-[250px] h-[200px] sm:w-[320px] sm:h-[250px] lg:w-[380px] lg:h-[380px] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoVisionSection;


