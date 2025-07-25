"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meozaowj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center pb-0"
    >
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-16 text-gray-600">
          Get in Touch
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 shadow-md shadow-gray-800/20 p-10 rounded-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded
             focus:outline-none focus:border-teal-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded
             focus:outline-none focus:border-teal-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded
             focus:outline-none focus:border-teal-600"
          ></textarea>

          <button
            type="submit"
            className="border border-gray-400 text-gray-800 text-xl px-6 py-2 rounded transition-colors hover:border-teal-600 hover:text-teal-600 font-semibold"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-teal-800 mt-2">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-800 mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="flex justify-center gap-10 mt-28">
          <a
            href="https://github.com/Timothy-Li"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-400 text-gray-600 hover:text-amber-400 hover:border-amber-400 transition"
          >
            <FaGithub className="w-8 h-8" />
          </a>

          <a
            href="/timli-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 rounded-full border border-gray-400 text-gray-600 hover:text-amber-400 hover:border-amber-400 transition font-semibold"
          >
            <FaFilePdf className="w-8 h-8" />
            <span className="hidden md:inline">View CV</span>
          </a>

          <a
            href="https://linkedin.com/in/timothy-h-h-li"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-400 text-gray-600 hover:text-amber-400 hover:border-amber-400 transition"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
