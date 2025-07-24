"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ScrollArrow from "./ScrollArrow";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 3,
      spacing: 32,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 1023px)": {
        slides: { perView: 2, spacing: 24, origin: "center" },
      },
      "(max-width: 767px)": {
        slides: { perView: 1, spacing: 16, origin: "center" },
      },
    },
  });

  const projects = [
    {
      title: "Tricky Words App",
      description: "A reading app to help children learn tricky English words.",
      image: "/projects/trickywords.png",
      siteUrl: "https://tricky-words.vercel.app/",
      githubUrl: "https://github.com/Timothy-Li/tricky-words",
    },
    {
      title: "QuizMania",
      description: "Multiplayer quiz game built with React and Node.js.",
      image: "/projects/quizmania.png",
      siteUrl: "https://quiz-mania-8h7a.vercel.app/",
      githubUrl: "https://github.com/Timothy-Li/QuizMania",
    },
    {
      title: "Personal Portfolio",
      description: "My Personal Portoflio, this site!",
      image: "/projects/portfolio.png",
      siteUrl: "https://portfolio-one-rho-81.vercel.app/",
      githubUrl: "https://github.com/Timothy-Li/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-700">
        Projects
      </h1>

      <div className="relative w-full overflow-visible flex items-center justify-center">
        <button
          onClick={() => instanceRef.current?.prev()}
          disabled={currentSlide === 0}
          className={`absolute left-0 z-10 px-6 py-4 text-4xl text-gray-600 font-bold bg-white shadow-md rounded-full transition hover:text-amber-500 disabled:opacity-0 hidden md:block`}
        >
          {"<"}
        </button>

        <div ref={sliderRef} className="keen-slider w-full px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`keen-slider__slide flex flex-col items-center shadow-lg hover:shadow-xl transition rounded-xl p-8 pb-12 space-y-6 mx-auto mb-5 transform transition-all duration-300 ${
                currentSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-30 scale-90"
              }`}
              style={{ width: "100%", maxWidth: "500px" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-md object-cover mb-4 mt-4"
              />

              <h2 className="text-2xl font-semibold text-gray-700">
                {project.title}
              </h2>

              <p className="text-center text-gray-700 italic">
                {project.description}
              </p>

              <div className="flex space-x-6">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  View Site
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.next()}
          disabled={currentSlide === projects.length - 1}
          className={`absolute right-0 z-10 px-6 py-4 text-4xl text-gray-600 font-bold bg-white shadow-md rounded-full transition hover:text-amber-500 disabled:opacity-0 hidden md:block`}
        >
          {">"}
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-4 h-4 rounded-full transition-colors ${
              currentSlide === idx ? "bg-amber-400" : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ScrollArrow targetId="skills" />
      </div>
    </section>
  );
}
