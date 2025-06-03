import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const cardData = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Our Office",
      line1: "SoHo 94 Broadway St",
      line2: "New York, NY 1001",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Call Us",
      line1: "+92 325-7376-637",
      line2: "+92 317-1556-267",
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      line1: "github.com/sabbehhassan",
      line2: "",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      line1: "hassansubbeh2446@gmail.com",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] bg-opacity-90 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-cyan-500 p-3 rounded-full text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.line1}</p>
                {item.line2 && <p className="text-sm text-gray-400">{item.line2}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#1e293b] bg-opacity-95 rounded-xl p-8 shadow-xl max-w-xl w-full mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
