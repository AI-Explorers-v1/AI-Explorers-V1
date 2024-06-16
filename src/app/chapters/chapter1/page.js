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
            <h1 className="font-semibold text-title text-center text-black text-black text-7xl mt-10"> Chapter 1</h1>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-8"> Introduction to AI</p>

            <div className="relative mt-32 ml-48"> {/* Video Embedding */}
                <iframe 
                    className="w-full h-[500px] md:w-[560px] md:h-[315px]" // Adjust width and height as needed
                    src="https://www.youtube.com/embed/sxHFDKwJGGo" // Corrected embed URL format
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                
                <h3 className="absolute left-[700px] top-0 font-semibold text-title text-b;lack text-5xl"> I AM AI </h3>
                <p className="absolute left-[600px] right-[300px] top-[70px] font-semibold text-center text-black text-title text-black-300 text-lg"> The powers of AI shown through NVIDIA's new AI chips.</p>
            </div>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> i. Chatbots and Language Processing</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> You probably have seen or even used chatbots such as Chat-GPT, Gemini, Azure etc. These chatbots are powerful enough to understand tone, context and everyday phrases at an advanced level. But how do they work? Chatbots use Natural Language Processing (NLP), a type of Artificial Intelligence, to understand and interpret text.  </p>
            
            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> *INSERT IMAGES* </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">
Typically, NLP implementation begins by gathering and preparing unstructured text or speech information from various sources like surveys, emails, or internal business process applications. 
This information is the data that needs to be pre-processed. Below is a quick description of the pre-processed steps in action from <Link href="https://aws.amazon.com/what-is/nlp/#:~:text=The%20NLP%20software%20uses%20pre,units%20of%20words%20or%20phrases." className="text-blue-500 text-decoration-line: underline">AWS</Link> .
“The NLP software uses pre-processing techniques such as tokenization, stemming, lemmatization, and stop word removal to prepare the data for various applications. 

Here's a description of these techniques:

Tokenization breaks a sentence into individual units of words or phrases. 
Stemming and lemmatization simplify words into their root form. For example, these processes turn "starting" into "start." 
Stop word removal ensures that words that do not add significant meaning to a sentence, such as "for" and "with," are removed.”

This data is now ready to be “trained”, which we will go into in later units; for now, think of it as a machine learning from this processed information and improving what it knows. After the model is trained, it is ready for various tasks and there is further detail about tasks <Link href="https://aws.amazon.com/what-is/nlp/#:~:text=The%20NLP%20software%20uses%20pre,units%20of%20words%20or%20phrases." className="text-blue-500 text-decoration-line: underline">here</Link>. </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">Here's a description of these techniques: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">Tokenization breaks a sentence into individual units of words or phrases. 
Stemming and lemmatization simplify words into their root form. For example, these processes turn "starting" into "start." 
Stop word removal ensures that words that do not add significant meaning to a sentence, such as "for" and "with," are removed.”
</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">This data is now ready to be “trained”, which we will go into in later units; for now, think of it as a machine learning from this processed information and improving what it knows. After the model is trained, it is ready for various tasks and there is further detail about tasks here.</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> ii. Image Generation</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> *Insert example images*</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">Image Generation is another task that is possible with Artificial Intelligence. It combines Language Processing (we talked about before) and large sets of picture data to successfully generate the specified image. You can try it yourself <Link href="https://www.imagine.art/dashboard/tool/from-text" className="text-blue-500 text-decoration-line: underline">here</Link>.</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">“It’s important to note that AI image generators also have various limitations when it comes to generating images with precise details. While these tools are a powerful way to create visual content, they are not always perfect in their current form. The quality of the generated image can be heavily reliant on the pre-trained images that the model uses, meaning that if the data used to train the AI is not representative of the desired output, the generated image may not be accurate.” <Link href="https://www.unite.ai/beginners-guide-to-ai-image-generators/" className="text-blue-500 text-decoration-line: underline">(from)</Link></p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> iii. Computer Vision</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">Computer Vision has many extremely valuable applications such as facial recognition,
self-driving cars, medical anomaly detection, sports performance analysis, and so much more. It is similar to Image recognition in the sense that they are trained on picture data, but instead of generating something they are oriented to classify an image or video.  </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">“A more recent application, which is still under development and will play a big role in the future of transportation, is object recognition. In object recognition an algorithm takes an input image and searches for a set of objects within the image, drawing boundaries around the object and labelling it. This application is critical in self-driving cars which need to quickly identify its surroundings in order to decide on the best course of action.” <Link href="https://builtin.com/machine-learning/computer-vision" className="text-blue-500 text-decoration-line: underline">(from)</Link></p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">One of the key components to computer vision is a convolutional neural networks (CNN). While neural networks are the frame for AI, convolutional neural networks help ML models see by fractionating images into pixels. Each pixel/fraction is labeled then used to carry out convolutions, a mathematical process that combines two functions to produce a third function. With this process, the CNN can start by identifying shapes and edges and eventually piece together what an image contains. </p>

            <Footer />
        </main>
    );
}
