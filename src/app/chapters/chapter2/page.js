"use client";

import React, { useState } from 'react';
import Nav from "@/app/components/navbarEvents";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';

export default function Chapter1() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="chapter1-container">
            <Nav />
            <button onClick={toggleSidebar} className="toggle-button">
                ☰
            </button>
            <SideNavbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <h1 className="font-semibold text-title text-center text-black text-black text-7xl mt-10"> Chapter 2</h1>

            <Footer />
        </main>
    );
}
