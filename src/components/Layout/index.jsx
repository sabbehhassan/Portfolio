
import React, { useState } from "react";
import Sidebar from "../SideBarSection";
import Hero from "../HeroSection";
import About from "../AboutSection";
import Services from "../ServicesSection";
import Skills from "../SkillsSection";
import Contact from "../ContactMe";
import PortfolioSection from "../PortfolioSection";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


      {/* Main Content */}
      <main
        className="flex-1 md:pl-74  scroll-smooth bg-[#0f172a]"
      >
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="portfolio"><PortfolioSection /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default Layout;
