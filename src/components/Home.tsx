"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Pharmacist",
  "Proud Dad",
  "Technical",
  "Creative",
  "Software Developer",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < phrases.length - 1) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Timothy Li
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 transition-opacity duration-500">
        {phrases[index]}
      </p>
    </section>
  );
}
