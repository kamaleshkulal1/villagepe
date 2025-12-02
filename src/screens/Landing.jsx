import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGooglePlay } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import { ArrowUp } from "lucide-react";
import HomeSection from "../components/landing/HomeSection";
import ServicesSection from "../components/landing/ServicesSection";
import AboutSection from "../components/landing/AboutSection";
import ContactSection from "../components/landing/ContactSection";
import OurTeam from "../components/landing/OurTeam";
import WhatWeDoVisionSection from "../components/landing/WhatWeDoVisionSection.jsx"


const sectionIds = ["home", "services", "products", "team", "about-us", "contact"];

const sectionHashMap = {
  home: "home",
  services: "services",
  products: "products",
  team: "team",
  "about-us": "about-us",
  contact: "contact",
  "contact-us": "contact",
};

const reverseSectionHashMap = Object.fromEntries(
  Object.entries(sectionHashMap).map(([key, value]) => [value, key])
);

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // On hash change, scroll to matching section
  useEffect(() => {
    const scrollToHash = () => {
      const rawHash = window.location.hash.replace("#", "");
      const section = sectionHashMap[rawHash] || "home";
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(section);
        }, 50);
      }
    };

    window.addEventListener("hashchange", scrollToHash);
    scrollToHash();

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  // While scrolling, update activeSection and URL hash
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const threshold = Math.min(window.innerHeight / 2, 300);

        if (rect.top <= threshold && rect.bottom >= threshold) {
          if (activeSection !== section) {
            setActiveSection(section);
          }

          const hash = reverseSectionHashMap[section] || section;
          if (window.location.hash !== `#${hash}`) {
            window.history.replaceState(null, "", `#${hash}`);
          }

          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div>
      <main className="pt-[80px] sm:pt-[88px] lg:pt-[96px]">
        <nav className="fixed top-0 left-0 w-full z-20 bg-[#FFFFFF] shadow-[-2px_1px_3.7px_0px_#00000040] px-3 sm:px-4 lg:px-8 h-[80px] sm:h-[88px] lg:h-[96px] flex items-center">
          <div className="flex items-center justify-between w-full container mx-auto gap-3 sm:gap-4 lg:gap-6">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-2xl text-purple-700 hover:text-purple-900 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>

            {/* Center nav (desktop) */}
            <div className="hidden lg:flex flex-1 ml-52 justify-center space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "products", label: "Products" },
                { id: "team", label: "Our Team" },
                { id: "about-us", label: "About us" },
                { id: "press", label: "Press" },
                { id: "careers", label: "Careers" },
                { id: "contact", label: "Contact us" },
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.id;
                      setActiveSection(targetId);
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                      const hash = reverseSectionHashMap[targetId] || targetId;
                      if (window.location.hash !== `#${hash}`) {
                        window.history.replaceState(null, "", `#${hash}`);
                      }
                    }}
                    className={`relative inline-flex flex-col items-center text-[18px] leading-[27px] px-3 py-1.5 ${isActive
                      ? "font-medium text-[#762A96]"
                      : "font-normal text-[#0E101E] hover:text-[#0E101E]"
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="mt-1 h-[5px] w-full max-w-[32px] rounded-[4px] bg-[#762A96]" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:flex ml-auto">
              <Link
                to="/download"
                className="bg-[#762A96] text-white px-7 py-2.5 rounded-full flex items-center gap-2 text-sm xl:text-base font-semibold hover:bg-purple-800 transition"
              >
                <FaGooglePlay size={18} />
                Download App
              </Link>
            </div>
          </div>
        </nav>
      </main>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} z-40`}>
        <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
          <FaTimes size={20} />
        </button>
        <nav className="flex flex-col space-y-6 mt-6">
          {[
            { id: "home", label: "Home" },
            { id: "products", label: "Products" },
            { id: "team", label: "Our Team" },
            { id: "about-us", label: "About us" },
            { id: "press", label: "Press" },
            { id: "careers", label: "Careers" },
            { id: "contact", label: "Contact us" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.id;
                  setActiveSection(targetId);
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }

                  const hash = reverseSectionHashMap[targetId] || targetId;
                  if (window.location.hash !== `#${hash}`) {
                    window.history.replaceState(null, "", `#${hash}`);
                  }

                  setMenuOpen(false);
                }}
                className={`relative text-[18px] leading-[27px] px-2 py-1 rounded-md ${isActive
                  ? "font-medium text-[#762A96]"
                  : "font-normal text-[#0E101E]"
                  }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 h-[2px] sm:h-[2.5px] lg:h-[3px] w-[24px] sm:w-[28px] lg:w-[32px] rounded-full bg-[#762A96]" />
                )}
              </a>
            );
          })}

          <Link
            to="/download"
            className="mt-4 bg-[#762A96] text-white px-7 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 justify-center hover:bg-purple-800 transition"
          >
            <FaGooglePlay size={18} />
            Download App
          </Link>
        </nav>
      </div>

      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <OurTeam />
      <WhatWeDoVisionSection />

      <ContactSection />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <ArrowUp size={30} />
      </button>

      <Footer />
    </div>
  );
}

export default Landing;
