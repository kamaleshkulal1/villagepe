import { Link } from 'react-router-dom';
import AppleStore from "../assets/AppleStore.webp";
import PlayStore from "../assets/PlayStore.webp";



const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const Footer = () => {
    return (
        <footer className="bg-[#FAFAFA] py-10 sm:py-12 lg:py-16 px-4 sm:px-6">
            <div className="max-w-8xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-16">
                    {/* Four Columns Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
                        {/* Quick Links */}
                        <div>
                            <h3
                                className="font-bold mb-3 sm:mb-4 text-[16px] sm:text-[18px] text-[#0E101E]"
                                style={{
                                    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                Quick Links
                            </h3>
                            <ul
                                className="space-y-2 text-[14px] sm:text-[16px] text-[#0E101E]"
                                style={{
                                    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                <li>
                                    <button
                                        onClick={() => scrollToSection('about-us')}
                                        className="text-[#0E101E] hover:text-[#762A96] transition"
                                        style={{
                                            fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        }}
                                    >
                                        What We Do
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('products')}
                                        className="text-[#0E101E] hover:text-[#762A96] transition"
                                        style={{
                                            fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        }}
                                    >
                                        Products
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="text-[#0E101E] hover:text-[#762A96] transition"
                                        style={{
                                            fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        }}
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3
                                className="font-bold mb-3 sm:mb-4 text-[#0E101E] text-[16px] sm:text-[18px]"
                                style={{
                                    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                Legal
                            </h3>
                            <ul className="space-y-2 text-[14px] sm:text-[16px] text-[#0E101E]">
                                <li>
                                    <Link
                                        to="/privacypolicy"
                                        className="text-[#0E101E] hover:text-[#762A96] transition"
                                        style={{
                                            fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        }}
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/terms-conditions"
                                        className="text-[#0E101E] hover:text-[#762A96] transition"
                                        style={{
                                            fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        }}
                                    >
                                        Terms & Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/refund-cancellation"
                                        className="text-[#0E101E] hover:text-[#762A96] transition"
                                        style={{
                                            fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                        }}
                                    >
                                        Refund & Cancellation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Get In Touch */}
                        <div>
                            <h3
                                className="font-bold mb-3 sm:mb-4 text-[16px] sm:text-[18px] text-[#0E101E]"
                                style={{
                                    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                Get In Touch
                            </h3>
                            <div
                                className="space-y-1 text-[14px] sm:text-[16px] text-[#0E101E]"
                                style={{
                                    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                <p>Gmaxepay Fintech Solutions Pvt Ltd</p>
                                <p>No 60/417, NKS Prime</p>
                                <p>Metro Station, 20th Main Rd</p>
                                <p>Below Rajaji Nagar</p>
                                <p>1st Block, 1st N Block</p>
                                <p>Rajajinagar, Bengaluru</p>
                                <p>Karnataka 560010</p>
                                <p>
                                    Email: <a href="mailto:support@gmaxepay.com" className="underline hover:text-[#762A96] transition">support@gmaxepay.com</a>
                                </p>
                                <p>Phone: 08062179126</p>
                            </div>
                        </div>

                        {/* Install App */}
                        <div>
                            <h3
                                className="font-bold mb-3 sm:mb-4 text-[16px] sm:text-[18px] text-[#0E101E]"
                                style={{
                                    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                }}
                            >
                                Install App
                            </h3>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                {/* App Store Button */}
                                <a
                                    href="#"
                                    className="inline-flex items-center hover:opacity-90 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={AppleStore}
                                        alt="Download on the App Store"
                                        className="h-[44px] w-[120px] sm:h-[50px] sm:w-[135px] lg:h-[56px] lg:w-[151px] object-contain"
                                    />
                                </a>

                                {/* Google Play Button */}
                                <a
                                    href="#"
                                    className="inline-flex items-center hover:opacity-90 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={PlayStore}
                                        alt="Get it on Google Play"
                                        className="h-[44px] w-[120px] sm:h-[50px] sm:w-[135px] lg:h-[56px] lg:w-[151px] object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - VILLAGEPE */}
                    <div className="text-center overflow-hidden px-2 sm:px-4">
                        <h1
                            className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[120px] xl:text-[180px] font-bold tracking-tight sm:tracking-normal lg:tracking-wider break-words"
                            style={{
                                fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                background: "linear-gradient(90deg, #762A96 0%, #F9ECFF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            VILLAGEPE
                        </h1>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
