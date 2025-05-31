import React, { useEffect, useState } from "react";
import img1 from "../../assets/weatherApp/img1.png";
import img2 from "../../assets/weatherApp/img2.png";
import img3 from "../../assets/weatherApp/img3.png";
import img4 from "../../assets/weatherApp/img4.png";

// Images arrays
const weatherAppImages = [img1, img2, img3, img4];

const projects = [
  {
    title: "FullStackWeatherApp",
    description: "A full-stack weather app with live weather data and a dynamic slideshow.",
    images: weatherAppImages,
    demoLink: "https://your-live-link.com/weather-app",
    githubLink: "https://github.com/yourusername/weather-app",
  },
  {
    title: "MERN Contact App",
    description: "A full-stack contact manager app with dynamic slideshow images.",
    images: weatherAppImages,
    demoLink: "https://your-live-link.com/contact-app",
    githubLink: "https://github.com/yourusername/mern-contact-app",
  },
  {
    title: "NFT Showcase",
    description: "NFT card carousel built with React and Tailwind CSS with a slideshow.",
    images: weatherAppImages,
    demoLink: "https://your-live-link.com/nft-showcase",
    githubLink: "https://github.com/yourusername/nft-showcase",
  },
  {
    title: "Task Manager App",
    description: "A task management app built with MERN stack and slideshow images.",
    images: weatherAppImages,
    demoLink: "https://your-live-link.com/task-manager",
    githubLink: "https://github.com/yourusername/task-manager",
  },
];

const PortfolioSection = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((index, i) =>
          index === projects[i].images.length - 1 ? 0 : index + 1
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0f172a] text-white py-12 md:py-18 px-6 md:px-16 md:h-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:pt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
            >
              {/* Slideshow Image */}
              <img
                src={project.images[currentIndexes[index]]}
                alt={project.title}
                className="w-full h-48 object-cover transition-all duration-500"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-col space-y-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm text-center"
                  >
                    Live Demo
                  </a>
                  {/* New Button for GitHub Repo */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm text-center"
                  >
                    GitHub Repo
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
