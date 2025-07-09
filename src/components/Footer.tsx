export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center text-gray-600 py-8 mt-12">
      <p className="mb-2 text-m">
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          Next.js
        </a>{" "}
        by Timothy Li
      </p>
      <p className="text-m">
        &copy; {new Date().getFullYear()} | All Rights Reserved
      </p>
    </footer>
  );
}
