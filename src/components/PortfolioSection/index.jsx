import React, { useEffect, useState } from "react";
import projects from "../../data/project";
const PortfolioSection = () => {
  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((idx, i) =>
          idx === projects[i].images.length - 1 ? 0 : idx + 1
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0f172a] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-4 rounded-xl shadow-md hover:shadow-cyan-500/40 transition-shadow"
            >
              <img
                src={project.images[currentIndexes[index]]}
                alt={project.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-md text-sm font-medium transition duration-300 text-white text-center"
              >
                🚀 Source Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
