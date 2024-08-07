"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOutUser } from '../firebase'; // Ensure this path is correct

function FullWidthNavbar() {
  const [user] = useAuthState(auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (user) {
      const storedProfilePicture = localStorage.getItem('profilePicture');
      if (storedProfilePicture) {
        setProfilePicture(storedProfilePicture);
      } else {
        setProfilePicture(user.photoURL); // Fallback to user photo URL from auth
      }
    }
  }, [user]);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={"/images/AiExplorersLogoNoBG.png"} className="h-12 mr-3" alt="AIExplorer Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">AI Explorers</span>
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Toggle mobile menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Home</Link>
            </li>
            <li>
              <Link href="/aboutus" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">About Us</Link>
            </li>
            <li>
              <Link href="/chapters/chapter1" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Learn</Link>
            </li>
            <li>
              <Link href="/donate" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Donate</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="relative ml-3">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" className="rounded-full w-10 h-10" />
            ) : (
              <FaUserCircle size={30} />
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              {user ? (
                <>
                  <Link href="/profile" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setDropdownOpen(false)}>
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      signOutUser();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/register" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setDropdownOpen(false)}>
                    Register
                  </Link>
                  <Link href="/login" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setDropdownOpen(false)}>
                    Login
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default FullWidthNavbar;