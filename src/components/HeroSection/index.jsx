import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover  bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 ">
        <img
          src="src/assets/bg.avif"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4 mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Sabbeh Hassan
        </h1>
        <p className="text-xl md:text-2xl text-white">I'm a Developer</p>
      </div>
    </section>
  );
};

export default Hero;
