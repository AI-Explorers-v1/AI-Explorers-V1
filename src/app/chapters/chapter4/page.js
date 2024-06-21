"use client";

import React, { useState } from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Chapter4() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="chapter4-container bg-gray-100 min-h-screen">
            <Navbar />
            <div className="relative pt-16">
                <button
                    onClick={toggleSidebar}
                    className="absolute top-6 left-6 p-2 text-white bg-gray-900 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 z-50"
                >
                    <FaBars size={24} />
                </button>
                <SideNavbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div className={`transition-transform transform ${isOpen ? 'translate-x-64' : ''}`}>
                    <h1 className="font-semibold text-title text-center text-black text-7xl mt-20"> Chapter 4</h1>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-8"> Transformer Model (architecture) </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        One of the most powerful advancements in AI is the Transformer model. Let's explore its architecture and some prominent examples.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-5xl mt-16"> a. Examples </p>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-16"> i. Chat GPT </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Chat GPT is a language model used for NLP (natural language processing). It can contextualize text and provide responses based on the data it was trained on. 
                        <Link href="https://example.com/chatgpt" className="text-blue-500 text-decoration-line: underline">Link for more information on ChatGPT.</Link>
                    </p>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-16"> ii. BERT </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        BERT is another framework for NLP, unique because it is bidirectional (reads both directions at once). 
                        <Link href="https://example.com/bert" className="text-blue-500 text-decoration-line: underline">Link for more information on BERT.</Link>
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        You might have used these machine-learning models before for various tasks. In this chapter, we will take a deeper dive into what makes them so powerful and unique.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-5xl mt-16"> b. Attention (self-attention) </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Self-attention is the key mechanism behind Transformer Models, allowing tools like Chat GPT and BERT to be incredibly capable in processing language. But what exactly does it do?
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Here is a short visualization: Imagine you're reading a sentence. To understand each word, you consider the other words around it, right? Self-attention is similar. In a transformer model, self-attention allows the model to focus on important parts of an input sequence (like a sentence) to understand the bigger picture. Instead of just processing things sequentially, it considers the relationships between all parts of the sequence at once.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Here is a breakdown of the self-attention layer:</p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Query, Key, and Value Vectors: Each element in the input sequence (like a word in a sentence) is assigned three vectors:
                    </p>
                    <ul className="list-disc ml-32 mt-4 mb-4 text-left">
                        <li><strong>Query (Q)</strong>: Represents what information the model is currently looking for.</li>
                        <li><strong>Key (K)</strong>: Captures the essence of each element, allowing the model to assess its relevance to the query.</li>
                        <li><strong>Value (V)</strong>: Holds the actual information associated with each element.</li>
                    </ul>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Attention Scores: The model calculates a score for each pair of elements in the sequence. This score reflects how relevant the value (information) of one element is to the current query. It's calculated by taking the dot product of the query vector and the key vector of each element, often with a scaling factor.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Softmax Function: The attention scores are then passed through a softmax function. This function transforms the scores into a probability distribution, ensuring they all sum up to 1. Basically, it tells the model how much "attention" to pay to each element based on its relevance.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Weighted Sum: Finally, the model takes a weighted sum of the value vectors, using the attention scores as weights. This gives more weight to the values of elements with higher attention scores, effectively creating a new representation of the sequence that focuses on the most relevant parts for the current processing step.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-5xl mt-16"> c. Utilizing the OpenAI API (Chat GPT) for your own personal project!</p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Follow these steps to set up and use the OpenAI API:
                    </p>
                    <ol className="list-decimal ml-32 mt-4 mb-4 text-left">
                        <li><strong>Set Up Your Environment</strong></li>
                        <ol className="list-disc ml-8">
                            <li>Sign Up for OpenAI API:
                                <ol className="list-decimal ml-8">
                                    <li>Go to the OpenAI website.</li>
                                    <li>Sign up for an account if you don’t already have one.</li>
                                    <li>Navigate to the API section and get your API key.</li>
                                </ol>
                            </li>
                            <li>Install Required Software:
                                <ol className="list-decimal ml-8">
                                    <li>Ensure you have Python installed on your computer. You can download it from the official Python website.</li>
                                    <li>Install the openai Python package using pip:
                                        <pre className="bg-gray-200 p-4 mt-2 rounded-md text-left text-black">pip install openai</pre>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <li><strong>Configure Your API Key</strong></li>
                        <ol className="list-disc ml-8">
                            <li>Store Your API Key Securely:
                                <ol className="list-decimal ml-8">
                                    <li>Create a .env file in your project directory and add your API key:
                                        <pre className="bg-gray-200 p-4 mt-2 rounded-md text-left text-black">OPENAI_API_KEY=your-api-key-here</pre>
                                    </li>
                                    <li>Install the python-dotenv package to load environment variables:
                                        <pre className="bg-gray-200 p-4 mt-2 rounded-md text-left text-black">pip install python-dotenv</pre>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <li><strong>Write Your Python Script</strong></li>
                        <ol className="list-disc ml-8">
                            <li>Import Necessary Libraries:
                                <pre className="bg-gray-200 p-4 mt-2 rounded-md text-left text-black">
                                    {`import openai\nimport os\nfrom dotenv import load_dotenv`}
                                </pre>
                            </li>
                            <li>Load Your API Key:
                                <pre className="bg-gray-200 p-4 mt-2 rounded-md text-left text-black">
                                    {`load_dotenv()\nopenai.api_key = os.getenv('OPENAI_API_KEY')`}
                                </pre>
                            </li>
                        </ol>
                        <li><strong>Make an API Request</strong></li>
                        <ol className="list-disc ml-8">
                            <li>Create a Function to Call the API:
                                <pre className="bg-gray-200 p-4 mt-2 rounded-md text-left text-black">
                                    {`def get_response(prompt, model="gpt-3.5-turbo"):\n    response = openai.ChatCompletion.create(\n        model=model,\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant."},\n            {"role": "user", "content": prompt},\n        ],\n    )\n    return response['choices'][0]['message']['content']`}
                                </pre>
                            </li>
                        </ol>
                    </ol>

                    <div className="flex justify-center mt-16">
                        <Link href="/chapters/comprehension4" legacyBehavior>
                        <a className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Take the Chapter 4 Test
                        </a>
                        </Link>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
