import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#0f172a] py-18 px-6 md:px-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile Image - Centered Top */}
        <div className="relative mt-10 mb-6 w-48 h-48 md:w-64 md:h-64">
          {/* Spinning colorful ring (outer, slightly bigger) */}
          <div className="absolute -inset-2 md:-inset-3 rounded-full animate-spin  z-0 bg-transparent border-4 border-transparent border-t-amber-400 border-r-cyan-400 border-b-pink-500 border-l-purple-500"></div>

          {/* Profile Image (inner circle, above the ring) */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg z-10">
            <img
              src="/public/assets/white.jpg"
              alt="Sabbeh Hassan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="text-white">
          <h2 className="mt-6 text-3xl md:text-4xl font-bold mb-4 border-b-4 border-amber-500 inline-block pb-2">
            About Me
          </h2>
          <p className="leading-relaxed mb-6 text-gray-300 max-w-2xl mx-auto mt-10 text-xl">
            I'm{" "}
            <span className="text-amber-500 font-semibold">Sabbeh Hassan</span>,
            a passionate developer who loves building modern web experiences. I
            focus on writing clean, scalable code and creating beautiful
            interfaces that engage users. I'm constantly learning and leveling
            up my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
