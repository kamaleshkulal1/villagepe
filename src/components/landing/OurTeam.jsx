import React from "react"
import Team from "../../assets/Team.png"
import Venkatesh from "../../assets/Venkatesh.png";
import Basavaraj from "../../assets/Basavaraj.png";
import Yuvaraj from "../../assets/Yuvaraj.png";
import NandhaKrishna from "../../assets/NandhaKrishna.png";
import Mamatha from "../../assets/Mamatha.png"

const teamMembers = [
    { name: "Nanda Krishna", role: "Director", img: NandhaKrishna },
    { name: "Mamatha", role: "Director", img: Mamatha },
    { name: "Basavaraj", role: "Director", img: Basavaraj },
    { name: "Yuvraj MP", role: "Director", img: Yuvaraj },
    { name: "Venkatesha", role: "CEO", img: Venkatesh },
];

const OurTeam = () => {
    return (
        <div id="team" className="w-full py-12 scroll-mt-20">

            {/* Title */}
            <h2
                className="text-center text-[#0E101E] text-[32px] sm:text-[40px] lg:text-[48px] mb-6 sm:mb-8 lg:mb-10 px-4"
                style={{
                    fontFamily:
                        '"Gilroy-SemiBold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
            >
                Our Team
            </h2>

            {/* Pink Rounded Background */}
            <div
                className="w-[90%] mx-auto rounded-3xl py-8 sm:py-10 lg:py-12 px-4 sm:px-6 flex flex-col items-center gap-6 sm:gap-8"
                style={{
                    background: "linear-gradient(90deg, #FDF9FF 0%, #F9ECFF 100%)",
                }}
            >

                {/* First Row */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-full shadow-md w-full sm:w-[280px] lg:w-[306px] h-auto sm:h-[120px] lg:h-[128px] px-3 sm:px-2 py-3 sm:py-2 flex items-center gap-3 sm:gap-4"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full object-cover flex-shrink-0"
                            />

                            <div className="flex-1 min-w-0">
                                {/* Name */}
                                <h3
                                    className="text-[18px] sm:text-[20px] lg:text-[23px] font-medium truncate"
                                    style={{
                                        fontFamily:
                                            '"Montserrat-SemiBold", Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    }}
                                >
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p
                                    className="text-[14px] sm:text-[16px] lg:text-[18px] sm:ml-5 text-[#0E101E] text-opacity-80"
                                    style={{
                                        fontFamily:
                                            '"Montserrat-Regular", Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    }}
                                >
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="flex justify-center w-full">
                    <div className="bg-white rounded-full shadow-md w-full sm:w-[280px] lg:w-[306px] h-auto sm:h-[120px] lg:h-[128px] px-3 sm:px-2 py-3 sm:py-2 flex items-center gap-3 sm:gap-4"
                    >
                        <img
                            src={teamMembers[4].img}
                            alt={teamMembers[4].name}
                            className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full object-cover flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                            <h3
                                className="text-[18px] sm:text-[20px] lg:text-[23px] font-medium truncate"
                                style={{
                                    fontFamily:
                                        '"Montserrat-SemiBold", Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                {teamMembers[4].name}
                            </h3>

                            <p
                                className="text-[14px] sm:text-[16px] lg:text-[18px] sm:ml-5 text-[#0E101E] text-opacity-80"
                                style={{
                                    fontFamily:
                                        '"Montserrat-Regular", Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                {teamMembers[4].role}
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="w-full max-w-[1360px] mx-auto py-10 sm:py-12 lg:py-16 bg-[#FAFAFA] px-4 sm:px-6">
                <h2
                    className="text-center text-[#0E101E] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold tracking-[0.08em]"
                    style={{
                        fontFamily:
                            '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                >
                    WHY CHOOSE US
                </h2>

                <p
                    className="text-center text-[16px] sm:text-[20px] lg:text-[24px] text-[#7B7B7B] mt-4 sm:mt-6 lg:mt-7"
                    style={{
                        fontFamily:
                            '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                    }}
                >
                    We Offer Best Professional Services For Your Business
                </p>

                {/* FAQ Section */}
                <div
                    className="w-[90%] max-w-full mx-auto divide-y divide-[#E5E5E5] mt-8 sm:mt-12 lg:mt-14"
                >

                    {/* Question 1 */}
                    <details className="group cursor-pointer mt-4 sm:mt-5"
                    >
                        <summary
                            className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-[16px] sm:text-[20px] lg:text-[24px] text-[#101828] font-medium list-none"
                            style={{
                                fontFamily:
                                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                        >
                            <span className="pr-2">What makes Villagepe a better choice for payments?</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#762A96] text-[#762A96] text-[14px] flex-shrink-0">
                                +
                            </span>
                        </summary>
                        <p className="px-4 sm:px-6 pb-4 text-[14px] sm:text-[16px] text-gray-600">
                            Villagepe ensures fast, secure and effortless transactions with modern technology.
                        </p>
                    </details>

                    {/* Question 2 */}
                    <details
                        className="group cursor-pointer mt-4 sm:mt-5"
                    >
                        <summary
                            className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-[16px] sm:text-[20px] lg:text-[24px] text-[#101828] font-medium list-none"
                            style={{
                                fontFamily:
                                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                        >
                            <span className="pr-2">Does Villagepe support easy bill payments?</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#762A96] text-[#762A96] text-[14px] flex-shrink-0">
                                +
                            </span>
                        </summary>
                        <p className="px-4 sm:px-6 pb-4 text-[14px] sm:text-[16px] text-gray-600">
                            Yes! You can pay all your bills quickly using a single platform.
                        </p>
                    </details>

                    {/* Question 3 */}
                    <details
                        className="group cursor-pointer mt-4 sm:mt-5"
                    >
                        <summary
                            className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-[16px] sm:text-[20px] lg:text-[24px] text-[#101828] font-medium list-none"
                            style={{
                                fontFamily:
                                    '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            }}
                        >
                            <span className="pr-2">How secure is Villagepe for financial transactions?</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#762A96] text-[#762A96] text-[14px] flex-shrink-0">
                                +
                            </span>
                        </summary>
                        <p className="px-4 sm:px-6 pb-4 text-[14px] sm:text-[16px] text-gray-600">
                            Villagepe follows high-end encryption standards ensuring maximum security.
                        </p>
                    </details>

                </div>
            </div>

        </div>
    );
};

export default OurTeam;
