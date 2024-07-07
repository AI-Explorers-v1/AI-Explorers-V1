"use client";

import { useState, useEffect } from 'react';
import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function AboutUs() {
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
                
                <div className="relative container mx-auto px-4 py-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
                        transition={{ duration: 0.8 }}
                        className="font-semibold text-7xl text-center mb-12 mt-12 text-white"
                    >
                        About Us
                    </motion.h1>

                    <div className="flex flex-col md:flex-row justify-center items-start gap-64">
                        <motion.div 
                            className="flex flex-col items-center max-w-md"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Image
                                src={"/images/Alex_Headshot.png"}
                                alt="Alex Cismaru"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg mb-6 object-cover w-80 h-64"
                            />
                            <h3 className="font-semibold text-4xl mb-4 text-center text-white">Alex Cismaru</h3>
                            <p className="text-gray-200 text-lg text-center">
                                Hey everyone! My name is Alex and I am one of the co-founders for AI Explorers. I am currently a junior at Homestead High School in Cupertino. I am super passionate about all things tech and computer science related and am super intrigued by Artificial Intelligence and its capabilities. In my free time, I love to play tennis and piano and enjoy hanging out with friends.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex flex-col items-center max-w-md"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Image
                                src={"/images/Eric_headshot.png"}
                                alt="Eric Liu"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg mb-6 object-cover w-80 h-64"
                            />
                            <h3 className="font-semibold text-4xl mb-4 text-center text-white">Eric Liu</h3>
                            <p className="text-gray-200 text-lg text-center">
                                Hi all! My name is Eric and I'm extremely proud to be one of the Co-Founders of AI Explorers. I am an upcoming senior at San Mateo High School. Innovation is something that I am truly inspired by and has led me to organize the first Hackathon at my school and other clubs. Some of my hobbies include water polo, working out, and camping.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}