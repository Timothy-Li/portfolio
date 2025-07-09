export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center text-gray-600 py-8 mt-12 border-t">
      <p>&copy; {new Date().getFullYear()} Timothy Li. All rights reserved.</p>
      <p>Built with Next.js and Tailwind CSS.</p>
    </footer>
  );
}
