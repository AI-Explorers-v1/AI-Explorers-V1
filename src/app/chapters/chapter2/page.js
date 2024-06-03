"use client";

import React, { useState } from 'react';
import Nav from "@/app/components/navbarEvents";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';

export default function Chapter1() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="chapter1-container">
            <Nav />
            <button onClick={toggleSidebar} className="toggle-button">
                ☰
            </button>
            <SideNavbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <h1 className="font-semibold text-title text-center text-black text-black text-7xl mt-10"> Chapter 2</h1>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-4xl mt-8"> AI Terms </p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-4xl mt-16"> i. Supervised vs. Unsupervised Learning</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> So how does a machine learn from data? Well, there are two types of machine learning techniques, Supervised and Unsupervised. A good video from IBM Technology is linked <Link href="https://www.youtube.com/watch?v=W01tIRP_Rqs." className="text-blue-500 text-decoration-line: underline">here</Link>. </p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> A short exercise, classifying supervised and unsupervised: </p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> If my model learns from labeled data, what kind of learning are you expecting? </p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> - supervised learning</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> When the number of features  (or dimensions) in a given dataset is too high, what learning is best?</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> - unsupervised learning</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> What type of learning is commonly used in clustering and association problems?</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> - unsupervised learning</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-4xl mt-16"> ii. Supervised vs. Unsupervised Learning</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> The task of imparting intelligence to machines seems difficult and incomprehensible, but it can be broken down into a few simple steps. From <Link href="https://www.simplilearn.com/tutorials/machine-learning-tutorial/machine-learning-steps#:~:text=Machine%20learning%20is%20the%20process,that%20data%20to%20learn%20more.." className="text-blue-500 text-decoration-line: underline">here</Link>.</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Collecting Data - “As you know, machines initially learn from the data that you give them. It is of the utmost importance to collect reliable data so that your machine-learning model can find the correct patterns. The quality of the data that you feed to the machine will determine how accurate your model is.” </p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Preparing Data - There are various steps that can be applied when preparing data. Some common techniques include randomizing the data, cleaning the data to remove unwanted data (part of feature-engineering, you will learn later), and visualizing the data. Finally, splitting the data into two sets - a training set and a testing set. The training set is the set your model learns from and the testing set is used to check the accuracy of your model after training.</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Choosing a model - “A machine learning model determines the output you get after running a machine learning algorithm on the collected data. It is important to choose a model which is relevant to the task at hand. Over the years, scientists and engineers developed various models suited for different tasks like speech recognition, image recognition, prediction, etc.”</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Training the model - “Training is the most important step in machine learning. In training, you pass the prepared data to your machine learning model to find patterns and make predictions. It results in the model learning from the data so that it can accomplish the task set. Over time, with training, the model gets better at predicting.” Training may require lots of time depending on your dataset and hardware setup. </p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Evaluate the model - “After training your model, you have to check to see how it’s performing. This is done by testing the performance of the model on previously unseen data. The unseen data used is the testing set that you split our data into earlier."</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Fine-tuning - “Once you have created and evaluated your model, see if its accuracy can be improved in any way. This is done by tuning the parameters present in your model. Parameters are the variables in the model that the programmer generally decides. At a particular value of your parameter, the accuracy will be the maximum.”</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Now you have a model that you can use to make predictions!</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-4xl mt-16"> iii. Neural Networks</p>

            <p className="font-semibold text-title text-center text-black text-neutral-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Extremely insightful 5 minute video on Neural Networks <Link href="https://www.youtube.com/watch?v=bfmFfD2RIcg" className="text-blue-500 text-decoration-line: underline">here</Link>.</p>

            <div className="relative mt-32 ml-48"> {/* Video Embedding */}
                <iframe 
                    className="w-full h-[500px] md:w-[560px] md:h-[315px]" // Adjust width and height as needed
                    src="https://www.youtube.com/watch?v=bfmFfD2RIcg" // Corrected embed URL format
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                
                <h3 className="absolute left-[700px] top-0 font-semibold text-title text-b;lack text-5xl"> Neural Networks </h3>
                <p className="absolute left-[600px] right-[300px] top-[70px] font-semibold text-center text-black text-title text-neutral-300 text-lg"> Neural Networks </p>
            </div>
            <Footer />
        </main>
    );
}
