"use client";

import { useState, useEffect } from 'react';
import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer";
import { motion } from 'framer-motion';

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative">
            <FullWidthNavbar />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            <div className="relative flex-grow container mx-auto px-4 py-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
                    transition={{ duration: 0.8 }}
                    className="font-semibold text-7xl text-center mb-12 mt-12 text-white"
                >
                    Contact
                </motion.h1>

                <motion.div 
                    className="flex flex-col items-center max-w-md mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="font-semibold text-4xl mb-4 text-center text-white">You can contact us here!</h2>
                    <p className="text-gray-200 text-lg text-center">
                        Gmail: exploringaiworld@gmail.com
                    </p>
                </motion.div>
            </div>
            <div className="relative">
                <Footer />
            </div>
        </main>
    );
}
