import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiDjango,
  SiSupabase,
} from "react-icons/si";

const skills = [
  { name: "HTML", color: "bg-amber-600", icon: <FaHtml5 /> },
  { name: "CSS", color: "bg-sky-600", icon: <FaCss3Alt /> },
  { name: "JavaScript", color: "bg-purple-600", icon: <FaJsSquare /> },
  { name: "React", color: "bg-green-600", icon: <FaReact /> },
  { name: "Tailwind", color: "bg-blue-800", icon: <SiTailwindcss /> },
  { name: "Node.js", color: "bg-green-700", icon: <FaNodeJs /> },
  { name: "Express.js", color: "bg-gray-800", icon: <SiExpress /> },
  { name: "Bootstrap", color: "bg-indigo-600", icon: <FaBootstrap /> },
  { name: "Python", color: "bg-yellow-700", icon: <FaPython /> },
  { name: "MongoDB", color: "bg-green-800", icon: <SiMongodb /> },
  { name: "Django", color: "bg-emerald-700", icon: <SiDjango /> },
  { name: "Supabase", color: "bg-lime-600", icon: <SiSupabase /> },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#0f172a] py-14 px-6 md:px-28">
      <div className="max-w-6xl mx-auto text-white text-center">
        <h2 className="mt-8 text-3xl md:text-4xl font-bold mb-4 border-b-4 border-amber-500 inline-block pb-2">
          My Skills
        </h2>
        <p className="mt-6 text-lg text-gray-300 mb-10">
        Here are the core technologies I specialize in and use to build efficient, scalable, and modern web applications.
        </p>

        {/* Grid of Skill Cards */}
        <div
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-10 place-items-center "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group ${skill.color} text-white px-5 py-4 w-36 h-28 rounded-md shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-opacity-80 active:scale-95`}
            >
              <div className="text-3xl mb-2 transition-colors duration-300 group-hover:text-amber-300">
                {skill.icon}
              </div>
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
