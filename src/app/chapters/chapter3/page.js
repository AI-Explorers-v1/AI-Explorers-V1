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

const Chapter3 = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const userProgress = await getProgress();
        setProgress(userProgress[`chapter3`]);
      }
    };

    fetchProgress();
  }, [user]);

  const sections = [
    {
      title: "Introduction to Deep Learning",
      content: (
        <>
          <p>Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers. It's called "deep" because of these many layers. Here are some key points:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Inspired by the human brain's structure and function</li>
            <li>Capable of learning complex patterns from large amounts of data</li>
            <li>Requires less manual feature engineering compared to traditional machine learning</li>
            <li>Powers many modern AI applications like image recognition and natural language processing</li>
          </ul>
        </>
      ),
      video: "https://www.youtube.com/embed/6M5VXKLf4D4"
    },
    {
      title: "Deep Neural Networks",
      content: (
        <>
          <p>Deep Neural Networks (DNNs) are the backbone of deep learning. They consist of:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Input Layer:</strong> Receives the initial data</li>
            <li><strong>Hidden Layers:</strong> Multiple layers that process and transform the data</li>
            <li><strong>Output Layer:</strong> Produces the final result or prediction</li>
          </ol>
          <p className="mt-4">Each layer contains nodes (neurons) connected to nodes in adjacent layers. The "deep" in deep learning refers to the multiple hidden layers that allow the network to learn increasingly complex features.</p>
        </>
      ),
      exercise: "Draw a simple diagram of a deep neural network with an input layer, two hidden layers, and an output layer. Label each layer and show how the nodes might be connected."
    },
    {
      title: "Types of Deep Learning Networks",
      content: (
        <>
          <p>There are several types of deep learning networks, each suited for different tasks:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Convolutional Neural Networks (CNNs):</strong> Excellent for image processing and computer vision tasks</li>
            <li><strong>Recurrent Neural Networks (RNNs):</strong> Used for sequential data like text or time series</li>
            <li><strong>Long Short-Term Memory (LSTM) Networks:</strong> A type of RNN that's better at learning long-term dependencies</li>
            <li><strong>Generative Adversarial Networks (GANs):</strong> Used for generating new, synthetic data that resembles real data</li>
          </ul>
          <p className="mt-4">Each type has its strengths and is chosen based on the specific problem and data type.</p>
        </>
      ),
      video: "https://www.youtube.com/embed/oJNHXPs0XDk"
    },
    {
      title: "Training Deep Learning Models",
      content: (
        <>
          <p>Training a deep learning model involves these key steps:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Data Preparation:</strong> Collecting and preprocessing large amounts of data</li>
            <li><strong>Forward Propagation:</strong> Passing data through the network to get predictions</li>
            <li><strong>Loss Calculation:</strong> Measuring how far off the predictions are from the true values</li>
            <li><strong>Backpropagation:</strong> Calculating gradients to understand how to adjust the network</li>
            <li><strong>Parameter Update:</strong> Adjusting the network's weights and biases to improve predictions</li>
          </ol>
          <p className="mt-4">This process is repeated many times (epochs) until the model's performance stops improving.</p>
        </>
      ),
      exercise: "Explain in your own words how backpropagation helps a neural network learn. How is it different from forward propagation?"
    }
  ];

  return (
    <main className="chapter3-container min-h-screen" style={{ backgroundColor: '#E9F0FD' }}>
      <Navbar />
      <div className="relative pt-16">
        <div className="flex">
          <SideNavbar />
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center mb-8 text-black">Chapter 3: Deep Learning</h1>
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
