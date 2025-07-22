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
            Hi, I'm Tim. At school, my favourite subjects were Science, Maths
            and Art. Like other kids my age, I wasn't sure what I wanted to do
            for work, so my parents guided me towards a career in healthcare.
          </p>

          <p>
            I subsequently studied Pharmacy at university, leading to a
            successful career as a Pharmacist. Although I enjoyed aspects of my
            work I never felt fulfilled.
          </p>

          <p>
            Over time, I realised I missed being creative, the thing that made
            Art so rewarding for me at school. I've always loved technology, and
            have fond memories of receiving my first Game Boy as a Christmas
            present.
          </p>

          <p>
            As I explored new career options, I was drawn to software
            development for its unique balance of science, technology, and
            creativity. Motivated by this, I completed the CS50 course, which I
            found incredibly engaging, and it confirmed my passion for a career
            in Tech.
          </p>

          <p>
            I left my job as a Pharmacist and was thrilled to be accepted onto
            the School of Code bootcamp. Since graduating, I've loved creating
            projects with my new skills whilst continuing to learn and grow.
          </p>
        </div>
      </div>

      <ScrollArrow targetId="projects" />
    </section>
  );
}
