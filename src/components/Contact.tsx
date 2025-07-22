"use client";
import { useState } from "react";

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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-20 text-gray-600">
          Get in Touch
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 shadow p-10 rounded-md"
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
            className="border text-teal-800 px-6 py-2 rounded transition-colors hover:border-teal-600"
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
      </div>
    </section>
  );
}
