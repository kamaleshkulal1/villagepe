
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGooglePlay } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <nav className="fixed top-[40px] left-0 w-full z-20 bg-white shadow-md px-4 lg:px-6 py-3">
      <div className="flex justify-between items-center container mx-auto">
        <button className="lg:hidden text-2xl text-rose-500" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {["home", "services", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-lg font-semibold italic px-4 py-2 rounded-md 
                ${activeSection === item ? "text-rose-500" : "text-gray-700"}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/register" className="border-2 border-blue-400 font-semibold px-4 py-2 rounded-md hover:bg-sky-500 hover:text-white">
            Register
          </Link>
          <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Login
          </Link>
          <Link to="/download" className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800 flex items-center gap-2">
            <FaGooglePlay size={20} /> Download App
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-64"} top-[2rem] z-40`}>
        <button className="absolute top-4 right-4 text-gray-700" onClick={() => setMenuOpen(false)}>
          <FaTimes size={20} />
        </button>
        <nav className="flex flex-col space-y-6 mt-6">
          {["home", "services", "about"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-semibold italic px-4 py-2 rounded-md ${activeSection === item ? "text-rose-500" : "text-gray-700"}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Link to="/register" className="border-2 border-black px-4 py-2 rounded-md">
            Register
          </Link>
          <Link to="/login" className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
            Login
          </Link>
          <Link to="/download" className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800">
            Download App
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
