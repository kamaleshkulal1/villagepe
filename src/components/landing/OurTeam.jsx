import React from "react"
import Team from "../../assets/Team.png"
import Venkatesh from "../../assets/Venkatesh.png";
import Basavaraj from "../../assets/Basavaraj.png";
import Yuvaraj from "../../assets/Yuvaraj.png";
import NandhaKrishna from "../../assets/NandhaKrishna.png"; 

const teamMembers = [
    { name: "Nanda Krishna", role: "Director", img: NandhaKrishna },
    { name: "Mamatha", role: "Director", img: Team },
    { name: "Basavaraj", role: "Director", img: Basavaraj },
    { name: "Yuvraj MP", role: "Director", img: Yuvaraj },
    { name: "Venkatesha", role: "CEO", img: Venkatesh },
];

const OurTeam = () => {
    return (
        <div className="w-full py-12 ">

            {/* Title */}
            <h2
                className="text-center text-[#0E101E] text-[48px] mb-10"
                style={{
                    fontFamily:
                        '"Gilroy-SemiBold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
            >
                Our Team
            </h2>

            {/* Pink Rounded Background */}
            <div
                className="w-[90%] mx-auto rounded-3xl py-12 px-6 flex flex-col items-center gap-8"
                style={{
                    background: "linear-gradient(90deg, #FDF9FF 0%, #F9ECFF 100%)",
                }}
            >

                {/* First Row */}
                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-full shadow-md w-[306px] h-[128px] px-2 py-2 flex items-center gap-4"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-[100px] h-[100px] rounded-full object-cover"
                            />

                            <div>
                                {/* Name */}
                                <h3
                                    className="text-[23px] font-medium"
                                    style={{
                                        fontFamily:
                                            '"Montserrat-SemiBold", Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    }}
                                >
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p
                                    className="text-[18px] ml-5 text-[#0E101E] text-opacity-80"
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
                <div className="flex justify-center">
                    <div className="bg-white rounded-full shadow-md w-[306px] h-[128px] px-2 py-2 flex items-center gap-4"
                    >
                        <img
                            src={teamMembers[4].img}
                            alt={teamMembers[4].name}
                            className="w-[100px] h-[100px] rounded-full object-cover"
                        />

                        <div>
                            <h3
                                className="text-[23px] font-medium"
                                style={{
                                    fontFamily:
                                        '"Montserrat-SemiBold", Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                {teamMembers[4].name}
                            </h3>

                            <p
                                className="text-[18px] ml-5 text-[#0E101E] text-opacity-80"
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

            {/* -------------------------------------- */}
            {/* WHY CHOOSE US */}
            {/* -------------------------------------- */}
            <div className="w-full py-16 bg-[#FAFAFA]">
                <h2 className="text-center text-[#0E101E] text-[32px] font-semibold tracking-[0.08em]">
                    WHY CHOOSE US
                </h2>

                <p className="text-center text-[14px] text-[#7B7B7B] mt-2">
                    We Offer Best Professional Services For Your Business
                </p>

                {/* FAQ Section */}
                <div className="w-[90%] max-w-4xl mx-auto mt-10 bg-white rounded-3xl shadow-sm divide-y divide-[#E5E5E5]">

                    {/* Question 1 */}
                    <details className="group cursor-pointer">
                        <summary className="flex justify-between items-center px-6 py-4 text-[16px] text-[#0E101E] font-medium list-none">
                            <span>What makes Villagepe a better choice for payments?</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#762A96] text-[#762A96] text-[14px]">
                                +
                            </span>
                        </summary>
                        <p className="px-6 pb-4 text-[14px] text-gray-600">
                            Villagepe ensures fast, secure and effortless transactions with modern technology.
                        </p>
                    </details>

                    {/* Question 2 */}
                    <details className="group cursor-pointer">
                        <summary className="flex justify-between items-center px-6 py-4 text-[16px] text-[#0E101E] font-medium list-none">
                            <span>Does Villagepe support easy bill payments?</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#762A96] text-[#762A96] text-[14px]">
                                +
                            </span>
                        </summary>
                        <p className="px-6 pb-4 text-[14px] text-gray-600">
                            Yes! You can pay all your bills quickly using a single platform.
                        </p>
                    </details>

                    {/* Question 3 */}
                    <details className="group cursor-pointer">
                        <summary className="flex justify-between items-center px-6 py-4 text-[16px] text-[#0E101E] font-medium list-none">
                            <span>How secure is Villagepe for financial transactions?</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#762A96] text-[#762A96] text-[14px]">
                                +
                            </span>
                        </summary>
                        <p className="px-6 pb-4 text-[14px] text-gray-600">
                            Villagepe follows high-end encryption standards ensuring maximum security.
                        </p>
                    </details>

                </div>
            </div>



        </div>
    );
};

export default OurTeam;
