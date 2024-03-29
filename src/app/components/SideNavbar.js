import React from 'react';
import Link from "next/link";

const SideNavbar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <div className="sidebar-header">
      <h3>
          <Link href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Home
          </Link>
        </h3>
        {/* <button className="close-btn" onClick={toggle}>
          &times;
        </button> */}
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link href="/chapters/chapter1" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chapter 1</Link>
        </li>
        <li>
          <Link href="/chapters/chapter1" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chapter 2</Link>
        </li>
        <li>
          <Link href="/donate" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chapter 3</Link>
        </li>
        <li>
          <Link href="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chapter 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
