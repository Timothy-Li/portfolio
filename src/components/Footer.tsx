export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center text-gray-600 py-8 mt-12 mt-0">
      <p className="mb-2 text-m font-semibold">
        Built with Next.js by <span className="">Timothy Li</span>
      </p>
      <p className="text-m">
        &copy; {new Date().getFullYear()} | All Rights Reserved
      </p>
    </footer>
  );
}
