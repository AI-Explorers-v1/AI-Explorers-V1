"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer";
import { motion } from 'framer-motion';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <FullWidthNavbar />
            
            <div className="flex-grow relative">
                {/* Abstract background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-repeat" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                
                <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
                    <motion.h1 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-center text-white mb-8 leading-tight"
                    >
                        AI Explorers
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-center text-gray-200 mb-12 max-w-3xl leading-relaxed"
                    >
                        Empowering underprivileged communities with AI and Machine Learning knowledge. We provide accessible, high-quality education to inspire innovation, foster creativity, and equip individuals for the future of technology.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.5 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link href="/chapters/chapter1" className="inline-block px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                            Let's Learn
                        </Link>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}