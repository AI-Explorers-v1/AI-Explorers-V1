'use client';

import React, { useState, useContext } from 'react';
import Link from "next/link";
import { Book, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { SidebarContext } from '/context/SidebarContext'

const SideNavbar = () => {

  const chapters = [
    { number: 1, title: "Introduction to AI" },
    { number: 2, title: "AI Terms and Concepts" },
    { number: 3, title: "Classification in AI" },
    { number: 4, title: "Transformer Models" },
  ];

  const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-6 flex justify-between items-center">
          <Link href="/" className={`flex items-center font-bold text-blue-600 hover:text-blue-800 ${isCollapsed ? 'text-xl' : 'text-2xl'}`}>
            <Home className="mr-2" />
            {!isCollapsed && "Home"}
          </Link>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
            {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            {chapters.map((chapter) => (
              <li key={chapter.number} className="mb-2">
                <Link href={`/chapters/chapter${chapter.number}/`} className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}>
                  <Book className={isCollapsed ? 'mr-0' : 'mr-3'} />
                  {!isCollapsed && (
                    <span>
                      Chapter {chapter.number}
                      <span className="block text-sm text-gray-500">{chapter.title}</span>
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default SideNavbar;