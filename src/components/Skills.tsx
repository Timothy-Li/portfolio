import ScrollArrow from "./ScrollArrow";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Testing",
    skills: ["Vitest", "Playwright", "Jest", "React Testing Library"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "RESTful API", "PostgreSQL", "Postman"],
  },
  {
    title: "Workflow & DevOps",
    skills: ["Git", "GitHub", "GitHub Actions", "Vercel", "Supabase", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div className="max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-24 text-gray-700">
          My Toolkit
        </h1>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold text-gray-700 mb-10">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full text-lg md:text-xl
             hover:border-teal-600 hover:text-teal-600
             transition-colors duration-200 mb-10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScrollArrow targetId="contact" />
    </section>
  );
}
