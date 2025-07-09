"use client";

import { useState, useEffect } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

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
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <nav className="flex justify-center items-center px-8 py-8 text-xl font-semibold gap-20">
        {sections.map((id) => {
          const isTL = id === "home";
          const displayText = isTL
            ? "TL"
            : id.charAt(0).toUpperCase() + id.slice(1);

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(id);
              }}
              className={`transition-colors duration-300 uppercase tracking-wide cursor-pointer ${
                activeSection === id
                  ? "text-teal-600"
                  : "text-slate-600 hover:text-teal-600"
              } ${isTL ? "text-3xl font-semibold tracking-tight" : ""}`}
            >
              {displayText}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
