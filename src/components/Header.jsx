import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
        
        {/* Logo / Brand Name */}
        <div className="text-2xl font-extrabold tracking-wide">
          🍴 FoodFusion
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <a href="/" className="hover:underline hover:underline-offset-4">Home</a>
          <a href="/recipes" className="hover:underline hover:underline-offset-4">Recipes</a>
          <a href="/blog" className="hover:underline hover:underline-offset-4">Blog</a>
          <a href="/contact" className="hover:underline hover:underline-offset-4">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex gap-4 text-2xl">
          <FaSearch className="cursor-pointer hover:text-gray-100" />
          <FaUserCircle className="cursor-pointer hover:text-gray-100" />
        </div>
      </div>
    </header>
  );
}
