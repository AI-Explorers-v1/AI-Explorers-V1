import React from 'react';
import Link from "next/link";
import { Book, Home } from 'lucide-react';

const SideNavbar = () => {
  const chapters = [
    { number: 1, title: "Introduction to AI" },
    { number: 2, title: "AI Terms and Concepts" },
    { number: 3, title: "Classification in AI" },
    { number: 4, title: "Transformer Models" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
      <div className="p-6">
        <Link href="/" className="flex items-center text-2xl font-bold text-blue-600 hover:text-blue-800">
          <Home className="mr-2" />
          Home
        </Link>
      </div>
      <nav className="mt-6">
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.number} className="mb-2">
              <Link href={`/chapters/chapter${chapter.number}/`} className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                <Book className="mr-3" />
                <span>
                  Chapter {chapter.number}
                  <span className="block text-sm text-gray-500">{chapter.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;