import React from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="flex font-sans">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[256px] bg-[#0f172a] text-white flex flex-col justify-between
          transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="p-5 mt-2">
          {/* Profile */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 mb-4">
              {/* Spinning Border Ring */}
              <div className="absolute inset-0 animate-spin rounded-full border-[2px] border-transparent border-t-amber-400 border-r-cyan-400 border-b-pink-500 border-l-purple-500 z-0"></div>

              {/* Image inside a slightly smaller container */}
              <div className="relative w-[88%] h-[88%] top-[6%] left-[6%] rounded-full overflow-hidden shadow-lg z-10">
                <img
                  src="/src/assets/white.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold mt-4">
              Sabbeh Hassan
            </h2>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-800"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/923257376637?text=Hello%2C%20I%20want%20more%20info."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://github.com/sabbehhassan"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-cyan-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex flex-col gap-6 text-xl font-bold">
            <a
              href="#hero"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-white hover:text-amber-400"
            >
              <FaHome /> Home
            </a>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-white hover:text-purple-400"
            >
              <FaUser /> About
            </a>
            <a
              href="#skills"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-white hover:text-green-400"
            >
              <FaFileAlt /> Skills
            </a>
            <a
              href="#services"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-white hover:text-indigo-400"
            >
              <FaBriefcase /> Services
            </a>
            <a
              href="#portfolio"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-white hover:text-indigo-400"
            >
              <FaBriefcase /> Portfolio
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-white hover:text-cyan-400"
            >
              <FaEnvelope /> Contact
            </a>
          </nav>
        </div>

        <div className="text-center text-xs text-gray-400 p-4">
          &copy; 2025 Sabbeh Hassan
        </div>
      </div>

      {/* Mobile toggle */}
      <button
        className="fixed top-4 right-4 text-3xl md:hidden z-50 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Sidebar;
