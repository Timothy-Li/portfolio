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
  const [isDone, setIsDone] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Timothy Li
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 flex items-center justify-center">
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
              delaySpeed={1200}
              onLoopDone={() => setIsDone(true)}
            />
            <span style={{ display: "inline-block", width: "8px" }}>
              &nbsp;
            </span>
          </>
        )}
      </p>
    </section>
  );
}
