"use client";

const sections = ["about", "projects", "skills", "contact"];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xl font-bold text-gray-700 hover:text-blue-500"
        >
          TL
        </a>

        <div className="flex gap-6">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-700 hover:text-blue-500 capitalize"
            >
              {id}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
