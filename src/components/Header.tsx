"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* TL Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
          }}
          // Only teal if activeSection is "home", else default gray
          className={`text-3xl font-semibold tracking-tight transition-colors duration-300 ${
            activeSection === "home" ? "text-teal-600" : "text-slate-600"
          }`}
        >
          TL
        </a>

        {/* Desktop nav (exclude home/TL link) */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {sections
            .filter((id) => id !== "home") // exclude "home" here
            .map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(id);
                  }}
                  className={`transition-colors duration-300 uppercase tracking-wide cursor-pointer ${
                    activeSection === id
                      ? "text-teal-600"
                      : "text-slate-600 hover:text-teal-600"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
        </ul>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu: exclude "home" / TL here */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white/90 backdrop-blur px-6 pb-6 pt-2 text-lg font-semibold space-y-4">
          {sections
            .filter((id) => id !== "home") // exclude "home"
            .map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(id);
                  }}
                  className={`block transition-colors duration-300 uppercase tracking-wide ${
                    activeSection === id
                      ? "text-teal-600"
                      : "text-slate-600 hover:text-teal-600"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
        </ul>
      )}
    </header>
  );
}
