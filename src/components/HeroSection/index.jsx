import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover  bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2098&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 text-center px-4 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Sabbeh Hassan</h1>
        <p className="text-xl md:text-2xl text-white">I'm a Developer</p>
      </div>
    </section>
  );
};

export default Hero;
