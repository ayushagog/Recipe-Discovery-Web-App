import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">🍴 FoodFusion</h1>
          <p className="text-sm mt-1">Delicious recipes for every taste.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-xl mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} FoodFusion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
