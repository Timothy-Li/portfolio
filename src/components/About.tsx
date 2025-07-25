import ScrollArrow from "./ScrollArrow";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
    >
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-16 text-gray-700">
          My Story
        </h1>

        <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
          <p>
            <span className="italic">Hi, I&#39;m Tim</span>. At school, my
            favourite subjects were Science, Maths and Art. Like other teenagers
            my age, I wasn&#39;t sure what I wanted to do for work, so my
            parents suggested a career in healthcare.
          </p>

          <p>
            I went on to study Pharmacy at university, and worked hard to build
            a successful career as a{" "}
            <span className="font-semibold">Pharmacist</span>. Although I
            enjoyed aspects of my work{" "}
            <span className="font-semibold">I never felt truly fulfilled</span>.
          </p>

          <p>
            I realised I{" "}
            <span className="text-amber-500">missed being creative</span>, the
            spark that made me enjoy Art so much at school, and drives my love
            for cooking. My{" "}
            <span className="text-amber-500">passion for technology</span>{" "}
            started early, ever since unwrapping my first Game Boy as a
            Christmas present.
          </p>

          <p>
            As I explored new career options, I was drawn to software
            development for its blend of science, technology, and creativity.
            Excited by this, I completed the{" "}
            <span className="text-teal-500">CS50 course</span>, which I really
            enjoyed, motivating me to pursue a career in tech.
          </p>

          <p>
            I left my job as a Pharmacist and was fortunate enough to be
            accepted onto the{" "}
            <span className="text-teal-500">School of Code bootcamp</span>.
            Since graduating, I&#39;ve been engrossed in{" "}
            <span className="text-teal-500">building personal projects</span>{" "}
            with my new skills whilst{" "}
            <span className="italic">continuing to learn and grow</span>.
          </p>
        </div>
      </div>

      <ScrollArrow targetId="projects" />
    </section>
  );
}
