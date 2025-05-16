// pages/404.js
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col items-center justify-center text-white px-4 text-center">
      
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found</h2>
      <p className="mb-6 text-lg">The page you’re looking for doesn’t exist or was moved.</p>
      
      <Link href="/">
        <span className="inline-flex items-center gap-2 bg-white text-red-500 px-5 py-2 rounded-full font-semibold hover:bg-red-100 transition">
          <FaArrowLeft /> Go Back Home
        </span>
      </Link>
    </div>
  );
}
