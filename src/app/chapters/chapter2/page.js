"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { Book, FileText, CheckCircle } from 'lucide-react';
import { auth, getProgress } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChapterSection = ({ title, icon, children }) => (
  <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
    <h2 className="flex items-center text-3xl font-bold mb-4 text-gray-800">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </div>
);

const LearningObjective = ({ children }) => (
  <div className="flex items-start mb-2">
    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
    <p className="text-gray-700">{children}</p>
  </div>
);

const Chapter2 = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const userProgress = await getProgress();
        setProgress(userProgress[`chapter2`]);
      }
    };

    fetchProgress();
  }, [user]);

  const sections = [
    {
      title: "Supervised vs. Unsupervised Learning",
      content: (
        <>
          <p>There are two main types of machine learning techniques:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Supervised Learning: Uses labeled data for training</li>
            <li>Unsupervised Learning: Works with unlabeled data to find patterns</li>
          </ul>
          <p className="mt-4">Understanding the difference is crucial for choosing the right approach for your AI project.</p>
        </>
      ),
      video: "https://www.youtube.com/embed/W01tIRP_Rqs"
    },
    {
      title: "Steps in Machine Learning",
      content: (
        <>
          <p>The process of machine learning can be broken down into several key steps:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Collecting Data</li>
            <li>Preparing Data</li>
            <li>Choosing a Model</li>
            <li>Training the Model</li>
            <li>Evaluating the Model</li>
            <li>Fine-tuning</li>
          </ol>
          <p className="mt-4">Each step is crucial for developing an effective machine learning model.</p>
        </>
      ),
      exercise: "Create a flowchart illustrating the machine learning steps. Explain how each step contributes to the overall process."
    },
    {
      title: "Neural Networks",
      content: (
        <>
          <p>Neural Networks are a fundamental concept in modern AI, inspired by the human brain's structure:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Composed of interconnected nodes (neurons)</li>
            <li>Organized in layers (input, hidden, output)</li>
            <li>Learn by adjusting connections between neurons</li>
          </ul>
          <p className="mt-4">Understanding neural networks is key to grasping how deep learning models process information and make decisions.</p>
        </>
      ),
      video: "https://www.youtube.com/embed/bfmFfD2RIcg"
    }
  ];

  return (
    <main className="chapter2-container min-h-screen" style={{ backgroundColor: '#E9F0FD' }}>
      <Navbar />
      <div className="relative pt-16">
        <div className="flex">
          <SideNavbar />
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center mb-8 text-black">Chapter 2: AI Terms and Concepts</h1>
            <ChapterSection title="Learning Objectives" icon={<Book className="text-blue-500" />}>
              <div className="ml-6">
                {sections.map((section, index) => (
                  <LearningObjective key={index}>
                    Understand {section.title.toLowerCase()}
                  </LearningObjective>
                ))}
              </div>
            </ChapterSection>
            {sections.map((section, index) => (
              <ChapterSection key={index} title={section.title} icon={<FileText className="text-blue-500" />}>
                <div className="prose max-w-none">
                  <p className="text-gray-700">{section.content}</p>
                </div>
                {section.video && (
                  <div className="mt-6">
                    <h3 className="text-xl text-gray-700 font-semibold mb-2">Watch and Learn</h3>
                    <div className="aspect-w-16 aspect-h-9" style={{ height: '400px' }}>
                      <iframe
                        src={section.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}
                {section.exercise && (
                  <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <h3 className="text-xl text-blue-500 font-semibold mb-2">Practice Exercise</h3>
                    <p className="text-gray-700">{section.exercise}</p>
                  </div>
                )}
              </ChapterSection>
            ))}
            <div className="mt-12 text-center">
              <Link href="/chapters/comprehension2" legacyBehavior>
                <a className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Take the Chapter 2 Test
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chapter2;
