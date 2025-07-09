"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const phrases = [
  "Pharmacist",
  "Problem Solver",
  "Creative",
  "Software Developer",
];

export default function Home() {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <section
      id="home"
      className="min-h-screen pt-[100px] flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl md:text-8xl font-semibold text-slate-600 mb-4">
        Timothy Li
      </h1>
      <p className="text-2xl md:text-4xl text-teal-600 flex items-center justify-center">
        {isDone ? (
          "Software Developer"
        ) : (
          <>
            <Typewriter
              words={phrases}
              loop={1}
              cursor={false}
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
              onLoopDone={() => setIsDone(true)}
            />
            <span style={{ display: "inline-block", width: "8px" }}>
              &nbsp;
            </span>
          </>
        )}
      </p>
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer select-none"
        onClick={() => {
          const nextSection = document.getElementById("about");
          if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        }}
        style={{
          width: "40px",
          height: "40px",
          animation: "bounce 2s infinite",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00897B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="6 13 12 19 18 13" />
        </svg>

        <style>
          {`
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15%);
        }
      }
    `}
        </style>
      </div>
    </section>
  );
}
