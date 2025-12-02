import React from "react";

const WhatWeDoVisionSection = () => {
  return (
    <>
      {/* -------------------------------------- */}
      {/* WHAT WE DO SECTION */}
      {/* -------------------------------------- */}
      <div className="w-full py-16 bg-white">
        <h2 className="text-center text-[#0E101E] text-[32px] font-semibold mb-10">
          What We Do
        </h2>

        <div className="w-[90%] mx-auto bg-white rounded-3xl shadow-sm p-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-[60%]">
            <p className="text-[18px] leading-[30px] text-gray-700">
              <strong>Villagepe</strong>, Our Mission Is Clear To Simplify
              Digital Transactions And Make Financial Services More Inclusive.
              We Believe That Technology Should Empower People, Not Complicate
              Their Lives. That’s Why We’ve Built A Platform Where{" "}
              <strong>Simplicity Meets Security</strong>, Offering A One-Stop
              Solution For All Your Payment Needs.
            </p>

            <p className="mt-5 text-[18px] leading-[30px] text-gray-700">
              Whether It’s Paying Bills, Or Managing Everyday Transactions,
              Villagepe Ensures The Process Is{" "}
              <strong>Effortless, Fast, And Secure.</strong> It’s Not Just
              About Access—It's About{" "}
              <strong>
                Trust, Convenience, And Empowering Communities
              </strong>{" "}
              To Thrive In The Digital Economy.
            </p>
          </div>

          <img
            src="/your-illustration-image.png"
            alt="Illustration"
            className="w-[280px] lg:w-[350px]"
          />
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* OUR VISION */}
      {/* -------------------------------------- */}
      <div className="w-full py-16 bg-white">
        <h2 className="text-center text-[#0E101E] text-[32px] font-semibold mb-10">
          Our Vision
        </h2>

        <div className="w-[90%] mx-auto bg-white p-10 rounded-3xl flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-[60%]">
            <p className="text-[18px] leading-[30px] text-gray-700">
              We Envision A Future Where Every Household, From Bustling Cities
              To The Most <strong>Remote Villages</strong>, Can Confidently
              Embrace Digital Payments. By Bridging The Gap Between Modern
              Fintech Solutions And Grassroots Communities, Villagepe Is
              Committed To Making Financial Services Accessible To All.
            </p>

            <p className="mt-5 text-[18px] leading-[30px] text-gray-700">
              Villagepe Is A Proud Brand Of Gmaxepay Fintech Solutions Pvt Ltd,
              Dedicated To Innovation In Financial Technology With Expertise In
              AEPS, CMS, POS Services.
            </p>
          </div>

          <img
            src="/your-award-image.png"
            alt="Award"
            className="w-[250px] lg:w-[330px]"
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeDoVisionSection;


