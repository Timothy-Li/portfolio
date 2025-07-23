"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ScrollArrow from "@/components/ScrollArrow";

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
      className="relative min-h-screen  flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl md:text-7xl font-semibold text-slate-600 mb-4">
        Timothy Li
      </h1>
      <p className="text-1xl md:text-3xl text-amber-500 flex items-center justify-center">
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
      <ScrollArrow targetId="about" />
    </section>
  );
}
