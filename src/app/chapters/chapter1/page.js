"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/app/components/navbar";
import SideNavbar from "@/app/components/SideNavbar";
import Footer from "@/app/components/footer";
import PageWithSideNav from '@/app/components/PageWithSideNav';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Importing an icon for the sidebar button
import { Book, Video, FileText, CheckCircle } from 'lucide-react';
import { auth, getProgress } from '../../firebase'; // Adjusted import path
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

const Chapter1 = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const userProgress = await getProgress();
        setProgress(userProgress[`chapter1`]);
      }
    };

    fetchProgress();
  }, [user]);

  const sections = [
    {
      title: "Chatbots and Language Processing",
      content: (
        <>
          <p>Chatbots like Chat-GPT, Gemini, and Azure use Natural Language Processing (NLP), a type of Artificial Intelligence, to understand and interpret text. Here's how NLP typically works:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Gather and prepare unstructured text or speech information</li>
            <li>Pre-process the data using techniques like tokenization, stemming, lemmatization, and stop word removal</li>
            <li>Train the model on the processed data</li>
            <li>Use the trained model for various language-related tasks</li>
          </ol>
        </>
      ),
      video: "https://www.youtube.com/embed/sxHFDKwJGGo"
    },
    {
      title: "Image Generation",
      content: (
        <>
          <p>AI Image Generation combines Language Processing with large sets of picture data to create images based on text descriptions. While powerful, these tools have limitations:</p>
          <ul className="list-disc ml-6 space-y-2 ">
            <li>Quality depends on the pre-trained images used by the model</li>
            <li>May struggle with precise details</li>
            <li>Output accuracy can vary based on the training data's representativeness</li>
          </ul>
        </>
      ),
      exercise: "Try generating an image using an AI tool like DALL-E or Midjourney. Describe your experience and the quality of the output."
    },
    {
      title: "Computer Vision",
      content: (
        <>
          <p>Computer Vision has numerous applications, including:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Facial recognition</li>
            <li>Self-driving cars</li>
            <li>Medical anomaly detection</li>
            <li>Sports performance analysis</li>
          </ul>
          <p className="mt-4">A key component of computer vision is the Convolutional Neural Network (CNN), which helps ML models 'see' by breaking down images into pixels and identifying patterns.</p>
        </>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Make navbar sticky */}
      <main className="flex-1 p-8 bg-[#E9F0FD] overflow-y-auto">
        <SideNavbar />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">Chapter 1: Introduction to AI</h1>

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
                <div className="m-6">
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
            <a href="/chapters/comprehension1" className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Take the Chapter 1 Test
            </a>
          </div>
        </div>
      </main>
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <Footer />
      </div>
    </div>
  );
};

export default Chapter1;
