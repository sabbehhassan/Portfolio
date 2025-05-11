import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const cardData = [
    {
      icon: <FaMapMarkerAlt size={32} />,
      title: "OUR MAIN OFFICE",
      line1: "SoHo 94 Broadway St",
      line2: "New York, NY 1001",
      bg: "bg-cyan-500",
    },
    {
      icon: <FaPhoneAlt size={32} />,
      title: "PHONE NUMBER",
      line1: "234-9876-5400",
      line2: "888-0123-4567 (Toll Free)",
      bg: "bg-indigo-500",
    },
    {
      icon: <FaGithub size={32} />,
      title: "GITHUB",
      line1: "Explore my code",
      line2: "github.com/your-username", // Replace with actual username
      bg: "bg-pink-500",
    },
    {
      icon: <FaEnvelope size={32} />,
      title: "EMAIL",
      line1: "hello@theme.com",
      line2: "",
      bg: "bg-emerald-500",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-8 px-4 md:px-16 md:h-160">
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
        
        {/* Left Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {cardData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg transition-transform duration-300 ${item.bg} hover:scale-105 active:scale-95`}
            >
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-white">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.line1}</p>
                {item.line2 && <p className="text-sm">{item.line2}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Right Contact Form */}
        <div className="bg-[#1f1f1f] rounded-xl p-8 flex-1 shadow-xl w-full max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-md hover:bg-cyan-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
