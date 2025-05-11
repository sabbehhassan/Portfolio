import React from "react";

const projects = [
  {
    title: "Memory Game",
    description: "React-based memory matching game with score saving and animations.",
    image: "/assets/project1.png", // Replace with your image path
    demoLink: "https://your-live-link.com/memory-game",
    githubLink: "https://github.com/yourusername/memory-game",
  },
  {
    title: "MERN Contact App",
    description: "Full-stack contact manager using MongoDB, Express, React, Node.js.",
    image: "/assets/project2.png",
    demoLink: "https://your-live-link.com/contact-app",
    githubLink: "https://github.com/yourusername/mern-contact-app",
  },
  {
    title: "NFT Showcase",
    description: "NFT card carousel built with React and Tailwind CSS.",
    image: "/assets/project3.png",
    demoLink: "https://your-live-link.com/nft-showcase",
    githubLink: "https://github.com/yourusername/nft-showcase",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-[#0f172a] text-white py-12 md:py-18 px-6 md:px-16 md:h-170">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:pt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
