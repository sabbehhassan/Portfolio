import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaUserCircle,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} className="text-amber-500" />,
    title: "Web Development",
    description:
      "Building fast, scalable, and modern web applications using React, Tailwind, and Node.js.",
  },
  {
    icon: <FaMobileAlt size={28} className="text-amber-500" />,
    title: "Responsive Design",
    description:
      "Creating mobile-friendly layouts that work seamlessly across all screen sizes and browsers.",
  },
  {
    icon: <FaPaintBrush size={28} className="text-amber-500" />,
    title: "UI/UX Engineering",
    description:
      "Designing clean, intuitive interfaces with a focus on usability, accessibility, and modern aesthetics.",
  },
  {
    icon: <FaServer size={28} className="text-amber-500" />,
    title: "Backend Integration",
    description:
      "Developing APIs, connecting to databases, and managing server-side logic with secure practices.",
  },
  {
    icon: <FaUserCircle size={28} className="text-amber-500" />,
    title: "Portfolio Development",
    description:
      "Creating personalized, high-performing portfolio sites to help individuals showcase their work effectively.",
  },
  {
    icon: <FaTools size={28} className="text-amber-500" />,
    title: "Site Maintenance",
    description:
      "Offering ongoing support, optimization, bug fixes, and SEO improvements for your website.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0f172a] py-16 px-6 md:px-20 text-white md:h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-4 border-amber-500 inline-block pb-2">
          My Services
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          I offer modern and scalable web solutions tailored to your business or personal brand needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-amber-500">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
