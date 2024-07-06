"use client";

import React, { useState } from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { Book, Video, FileText, CheckCircle } from 'lucide-react';

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

const Chapter3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sections = [
    {
      title: "Introduction to Classification",
      content: (
        <>
          <p>Classification is a fundamental concept in AI where objects are categorized based on their characteristics. It's widely used in various applications:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Apples vs. Oranges: A classic example of binary classification</li>
            <li>Cat vs. Dog: Another common binary classification task</li>
            <li>Spam vs. Not Spam: Used in email filtering systems</li>
          </ul>
        </>
      )
    },
    {
      title: "Types of Classification Algorithms",
      content: (
        <>
          <p>There are several types of classification algorithms, each with its own approach:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Decision Trees: Uses a tree-like model of decisions</li>
            <li>K-Nearest Neighbors: Classifies based on the closest training examples</li>
            <li>Support Vector Machines: Finds the optimal hyperplane to separate classes</li>
            <li>Artificial Neural Networks: Inspired by biological neural networks</li>
          </ul>
        </>
      ),
      video: "https://www.youtube.com/embed/aircAruvnKk"
    },
    {
      title: "Practical Classification with Machine Learning",
      content: (
        <>
          <p>To get started with practical classification tasks:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Use Google Colab as an environment for training ML models</li>
            <li>Learn the basics of machine learning with Kaggle tutorials</li>
            <li>Try implementing a Cat vs. Dog classifier using Kaggle datasets</li>
            <li>Create a custom project following the provided walkthrough</li>
          </ol>
        </>
      ),
      exercise: "Choose a dataset from Kaggle suitable for a classification task. Implement a simple classifier using the steps outlined in the custom project walkthrough. Compare the performance of at least two different classification algorithms on your chosen dataset."
    }
  ];

  return (
    <main className="chapter3-container min-h-screen" style={{ backgroundColor: '#E9F0FD' }}>
      <Navbar />
      <div className="relative pt-16">
        <div className="flex">
          <SideNavbar/>
            <div className="max-w-4xl mx-auto px-4 py-8">
              <h1 className="text-5xl font-bold text-center mb-8 text-black">Chapter 3: Classification in AI</h1>
              
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
                    <div className="mt-6 p-4 ">
                      <h3 className="text-xl text-gray-700 font-semibold mb-2">Watch and Learn</h3>
                      <div className="aspect-w-16 aspect-h-9"style={{ height: '400px' }}>
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
                <Link href="/chapters/comprehension3" legacyBehavior>
                  <a className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Take the Chapter 3 Test
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

export default Chapter3;