import ScrollArrow from "./ScrollArrow";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white"
    >
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
          My Story
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
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
            Over time, I realised I missed using my creativity, which is what
            made me love Art at school. I've always loved technology, and have
            fond memories of receiving my first Game Boy as a Christmas present.
          </p>

          <p>
            When looking into other career options, I discovered software
            development offered a perfect blend of Science, Tech and Art. This
            led me to take the CS50 course, which I absolutely loved, making me
            pursue a career in Tech.
          </p>

          <p>
            I quit my job as a Pharmacist and enrolled on the School of Code
            bootcamp. Since completing the bootcamp, I've really enjoyed
            applying my new skills creating my own projects whilst continuing to
            learn and grow.
          </p>
        </div>
      </div>

      <ScrollArrow targetId="projects" />
    </section>
  );
}
