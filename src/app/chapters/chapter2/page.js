"use client";

import React, { useState } from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Importing an icon for the sidebar button

export default function Chapter2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="chapter2-container bg-gray-100 min-h-screen">
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
                    <h1 className="font-semibold text-title text-center text-black text-7xl mt-20"> Chapter 2</h1>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-8"> AI Terms </p>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-16"> i. Supervised vs. Unsupervised Learning</p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        So how does a machine learn from data? Well, there are two types of machine learning techniques, Supervised and Unsupervised. A good video from IBM Technology is linked 
                        <Link href="https://www.youtube.com/watch?v=W01tIRP_Rqs" className="text-blue-500 text-decoration-line: underline"> here</Link>.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        A short exercise, classifying supervised and unsupervised:
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        If my model learns from labeled data, what kind of learning are you expecting?
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        - supervised learning
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        When the number of features  (or dimensions) in a given dataset is too high, what learning is best?
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        - unsupervised learning
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        What type of learning is commonly used in clustering and association problems?
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        - unsupervised learning
                    </p>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-16"> ii. Supervised vs. Unsupervised Learning</p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        The task of imparting intelligence to machines seems difficult and incomprehensible, but it can be broken down into a few simple steps. From 
                        <Link href="https://www.simplilearn.com/tutorials/machine-learning-tutorial/machine-learning-steps#:~:text=Machine%20learning%20is%20the%20process,that%20data%20to%20learn%20more.." className="text-blue-500 text-decoration-line: underline"> here</Link>.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Collecting Data - “As you know, machines initially learn from the data that you give them. It is of the utmost importance to collect reliable data so that your machine-learning model can find the correct patterns. The quality of the data that you feed to the machine will determine how accurate your model is.”
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Preparing Data - There are various steps that can be applied when preparing data. Some common techniques include randomizing the data, cleaning the data to remove unwanted data (part of feature-engineering, you will learn later), and visualizing the data. Finally, splitting the data into two sets - a training set and a testing set. The training set is the set your model learns from and the testing set is used to check the accuracy of your model after training.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Choosing a model - “A machine learning model determines the output you get after running a machine learning algorithm on the collected data. It is important to choose a model which is relevant to the task at hand. Over the years, scientists and engineers developed various models suited for different tasks like speech recognition, image recognition, prediction, etc.”
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Training the model - “Training is the most important step in machine learning. In training, you pass the prepared data to your machine learning model to find patterns and make predictions. It results in the model learning from the data so that it can accomplish the task set. Over time, with training, the model gets better at predicting.” Training may require lots of time depending on your dataset and hardware setup.
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Evaluate the model - “After training your model, you have to check to see how it’s performing. This is done by testing the performance of the model on previously unseen data. The unseen data used is the testing set that you split our data into earlier."
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Fine-tuning - “Once you have created and evaluated your model, see if its accuracy can be improved in any way. This is done by tuning the parameters present in your model. Parameters are the variables in the model that the programmer generally decides. At a particular value of your parameter, the accuracy will be the maximum.”
                    </p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Now you have a model that you can use to make predictions!
                    </p>
                    <p className="font-semibold text-title text-center text-black text-4xl mt-16"> iii. Neural Networks</p>
                    <p className="font-semibold text-title text-center text-black text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
                        Extremely insightful 5 minute video on Neural Networks 
                        <Link href="https://www.youtube.com/watch?v=bfmFfD2RIcg" className="text-blue-500 text-decoration-line: underline"> here</Link>.
                    </p>
                    <div className="relative mt-32 mx-auto max-w-6xl"> {/* Video Embedding */}
                        <iframe 
                            className="w-full h-[315px] md:h-[500px]" // Adjust width and height as needed
                            src="https://www.youtube.com/embed/bfmFfD2RIcg" // Corrected embed URL format
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 font-semibold text-title text-black text-5xl"> Neural Networks </h3>
                        <p className="absolute top-[70px] left-1/2 transform -translate-x-1/2 font-semibold text-center text-black text-lg max-w-md"> Neural Networks </p>
                    </div>
                    <div className="flex justify-center mt-16">
                        <Link href="/chapters/comprehension1" legacyBehavior>
                        <a className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Take the Chapter 2 Test
                        </a>
                        </Link>
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
