'use client';
import Link from "next/link";
import { useState } from "react";



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <nav className="border-b border-gray-200 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">ServeSync</span>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-indigo-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

           
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600">
                About us
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-indigo-600">
                Features
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-indigo-600"
              >
                Contact
              </Link>
            </div>

             
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

          
      <div className="md:hidden bg-white border-b border-gray-200">
    <div className="px-4 py-4 space-y-3">
      <Link 
        href="#" 
        className="block text-gray-700 hover:text-indigo-600 py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        href="#" 
        className="block text-gray-700 hover:text-indigo-600 py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        About us
      </Link>
      <Link 
        href="#" 
        className="block text-gray-700 hover:text-indigo-600 py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        Features
      </Link>
      <Link 
        href="/contact" 
        className="block text-gray-700 hover:text-indigo-600 py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </Link>
      
      <div className="pt-4 space-y-2">
        <Link 
          href="/auth/login" 
          className="block text-center text-gray-700 hover:text-indigo-600 py-2 border border-gray-300 rounded-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          Login
        </Link>
        <Link 
          href="/auth/register" 
          className="block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
      </nav>

 
   

    )
}
