"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { Book, FileText, CheckCircle, Code } from 'lucide-react';
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

const InteractiveDemo = ({ title, children }) => (
  <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
    <h3 className="text-xl text-blue-700 font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const Chapter5 = () => {
  const [user] = useAuthState(auth);
  const [progress, setProgress] = useState(null);
  const [attentionInput, setAttentionInput] = useState("The cat sat on the mat");
  const [attentionOutput, setAttentionOutput] = useState("");

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const userProgress = await getProgress();
        setProgress(userProgress[`chapter5`]);
      }
    };

    fetchProgress();
  }, [user]);

  const simulateAttention = () => {
    const words = attentionInput.split(" ");
    const attention = words.map((word, index) => {
      const score = Math.random();
      return { word, score };
    });
    attention.sort((a, b) => b.score - a.score);
    setAttentionOutput(attention.map(({ word, score }) => `${word} (${score.toFixed(2)})`).join(", "));
  };

  const sections = [
    {
      title: "Introduction to Transformer Models",
      content: (
        <>
          <p>Transformer models represent a significant advancement in AI, particularly in natural language processing (NLP). They use a unique architecture that allows them to process sequential data more effectively than previous models.</p>
          <p className="mt-4">Key features of transformer models include:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Parallel processing of input data</li>
            <li>Attention mechanisms for capturing context</li>
            <li>Ability to handle long-range dependencies in data</li>
          </ul>
        </>
      )
    },
    {
      title: "Examples of Transformer Models",
      content: (
        <>
          <h3 className="text-2xl font-semibold mb-2">1. GPT (Generative Pre-trained Transformer)</h3>
          <p>GPT models, including ChatGPT, are designed for generating human-like text. They're trained on vast amounts of text data and can perform various language tasks.</p>
          <h3 className="text-2xl font-semibold mt-4 mb-2">2. BERT (Bidirectional Encoder Representations from Transformers)</h3>
          <p>BERT is designed to understand the context of a word by looking at the words that come before and after it. This bidirectional approach allows for more nuanced language understanding.</p>
          <h3 className="text-2xl font-semibold mt-4 mb-2">3. T5 (Text-to-Text Transfer Transformer)</h3>
          <p>T5 treats every NLP task as a "text-to-text" problem, allowing it to be used for a wide range of tasks with a single model architecture.</p>
        </>
      ),
      video: "https://www.youtube.com/embed/4Bdc55j80l8"
    },
    {
      title: "Self-Attention Mechanism",
      content: (
        <>
          <p>Self-attention is the core innovation in transformer models. It allows the model to weigh the importance of different parts of the input when processing each part.</p>
          <h3 className="text-2xl font-semibold mt-4 mb-2">How Self-Attention Works:</h3>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Query, Key, and Value Vectors:</strong> Each input element is transformed into these three vectors.</li>
            <li><strong>Attention Scores:</strong> Calculated by comparing the query of one element with the keys of all elements.</li>
            <li><strong>Softmax:</strong> Scores are normalized to sum to 1, creating attention weights.</li>
            <li><strong>Weighted Sum:</strong> The final output for each element is a weighted sum of all value vectors, using the attention weights.</li>
          </ol>
        </>
      )
    },
    {
      title: "Using the OpenAI API",
      content: (
        <>
          <p>The OpenAI API allows developers to integrate powerful language models like GPT into their applications. Here's a step-by-step guide to get started:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Sign up for an OpenAI account and obtain an API key</li>
            <li>Install the OpenAI Python library: <code>pip install openai</code></li>
            <li>Set up your environment variables to securely store your API key</li>
            <li>Write Python code to make API calls and process the responses</li>
          </ol>
          <p className="mt-4">Here's a basic example of using the OpenAI API:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is a transformer model?"}
  ]
)

print(response.choices[0].message.content)`}
          </pre>
        </>
      )
    }
  ];

  return (
    <main className="chapter5-container min-h-screen" style={{ backgroundColor: '#E9F0FD' }}>
      <Navbar />
      <div className="relative pt-16">
        <div className="flex">
          <SideNavbar />
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center mb-8 text-black">Chapter 5: Transformer Models</h1>
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
                {section.title === "Self-Attention Mechanism" && (
                  <InteractiveDemo title="Simulate Self-Attention">
                    <p className="text-gray-700">Enter a sentence to see a simplified simulation of self-attention weights:</p>
                    <input
                      type="text"
                      value={attentionInput}
                      onChange={(e) => setAttentionInput(e.target.value)}
                      className="w-full p-2 text-gray-700 border rounded mt-2"
                    />
                    <button
                      onClick={simulateAttention}
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Simulate Attention
                    </button>
                    {attentionOutput && (
                      <div className="mt-4 text-gray-700">
                        <strong>Attention Output (The closer it is to 1, the more impact that word has in the sentence)</strong>
                        <p>{attentionOutput}</p>
                      </div>
                    )}
                  </InteractiveDemo>
                )}
              </ChapterSection>
            ))}
            <div className="mt-12 text-center">
              <Link href="/chapters/comprehension5" legacyBehavior>
                <a className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Take the Chapter 5 Test
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

export default Chapter5;
