"use client";

import React, { useState } from 'react';
import Nav from "@/app/components/navbarEvents";
import Footer from "@/app/components/footer";
import SideNavbar from "@/app/components/SideNavbar";
import Link from 'next/link';

export default function Chapter3() {
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
            <h1 className="font-semibold text-title text-center text-black text-black text-7xl mt-10"> Chapter 3</h1>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-8"> Classification </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> One of the most common uses of Artificial Intelligence is to classify certain things. What is classification? Classification is putting a person, place, or thing into a category or group based on some of their qualities or characteristics. For example, if we were given these 2 images (pic of apple and dog), and were asked which one is an animal, we would classify the image of the dog as one. We know this because animals generally tend to have bones and limbs while an apple does not. Machine Learning models use the same logic to classify data. They generally are trained to be able to recognize some key features of what a certain group of objects would look like. Lets look at some common examples of classification models. </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-5xl mt-16"> a. Examples </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> i. Apples vs. Oranges </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Every ML programmer makes an apple vs. orange classifier at some point in their life. If you may remember from lesson 2, supervised learning is when data is labeled. An apple vs orange classifier commonly has labeled data. That way, the machine learning model can begin to learn some key features of an apple vs. those of an orange. </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> ii. Cat vs. Dog </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Another common example is a cat vs. dog classifier. Most of these classifiers use the same logic as the apple vs. orange classifier. By learning the key features of a dog and the key features of a cat, it is able to differentiate which animal is a cat and which is a dog. </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> iii. Spam vs. Not Spam </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Our final example is spam vs. not spam. Oftentimes, it is hard to notice some of the distinctive factors of a spam email, however it is still there. ML models trained on enough spam vs. not spam email data are able to decipher which emails are which. </p>
            
            <p className="font-semibold text-title text-center text-black text-black-200 text-5xl mt-16"> b. Types of classification Algorithms </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> i. Decision Tree </p>
        
            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> The basic idea behind the Decision Tree is that it contains nodes that represent the features of a dataset, branches that represent the decision rules, and leaf nodes that represent the outcome. A decision tree simply asks a question, and based on the answer (Yes/No), it further splits the tree into subtrees.  </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> ii. K-Nearest Neighbors </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> The K-Nearest Neighbor algorithm works by: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Storing the entire dataset </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Classifying each new data point based on the existing data points that are similar to it </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Making predictions based on the training or "known" data only </p>

            <Link href="https://towardsdatascience.com/machine-learning-basics-with-the-k-nearest-neighbors-algorithm-6a6e71d01761" className="text-blue-500 text-decoration-line: underline"> ⇒ A resourceful guide to Machine Learning Basics with the K-Nearest Neighbors Algorithm </Link> 

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> iii. Support Vector Machines </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose">The main objective of the SVM algorithm is to find the optimal hyperplane in an N-dimensional space that can separate the data points in different classes in the feature space. How does it work?  </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> iv. Artificial Neural Networks </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Artificial Neural Networks are the backbone for many machine learning processes and will be the focus of this course from here on out. The following video is extremely helpful to understand the basics of neural networks. </p>

            <Link href="https://www.youtube.com/watch?v=aircAruvnKk" className="text-blue-500 text-decoration-line: underline"> https://www.youtube.com/watch?v=aircAruvnKk </Link> 

            <p className="font-semibold text-title text-center text-black text-black-200 text-5xl mt-16"> c. Example w/ Coding </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> <Link href="https://colab.research.google.com/drive/16pBJQePbqkz3QFV54L4NIkOn1kwpuRrj" className="text-blue-500 text-decoration-line: underline"> i. Intro to Google Colab (environment for training ml models) </Link> </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> <Link href="https://www.kaggle.com/learn/intro-to-machine-learning" className="text-blue-500 text-decoration-line: underline"> ii. Intro to Machine learning with Kaggle </Link> </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> <Link href="https://www.kaggle.com/code/kanishanand/dogs-vs-cats" className="text-blue-500 text-decoration-line: underline"> iii. Cat vs. Dog classifier (Kaggle)</Link> </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> iv. Custom Project! </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-4xl mt-16"> Custom Project Walkthrough </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Search for a Dataset on Kaggle: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Use the search bar to find datasets suitable for classification problems (e.g., "Iris Dataset", "Titanic Dataset", etc.). Select a dataset that interests you and make sure it’s appropriate for a classification task. </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Download the Dataset: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Go to the dataset's page and click on the "Download" button to get the dataset files (usually in CSV format). </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Setup the environment in Google Colab: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Make sure to install the necessary libraries (pandas, numpy, matplotlib, sklearn etc.) </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Load and Explore the Dataset:</p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Display the first few rows of the dataset: df.head() </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Get basic information about the dataset:df.info() </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Check for missing values: df.isnull().sum() </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Split the dataset: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Evaluate the model: </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> (a few metrics from sklearn) </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> accuracy = accuracy_score(y_test, y_pred) </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> precision = precision_score(y_test, y_pred, average='weighted') </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> recall = recall_score(y_test, y_pred, average='weighted') </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> f1 = f1_score(y_test, y_pred, average='weighted') </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> {`print(f'Accuracy: {accuracy}')`} </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> {`print(f'Precision: {precision}')`} </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> {`print(f'Recall: {recall}')`} </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> {`print(f'F1 Score: {f1}')`} </p>

            <p className="font-extrabold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Fine-Tuning and Improvement </p>

            <p className="font-semibold text-title text-center text-black text-black-200 text-xl mt-16 mb-20 ml-24 mr-24 leading-loose"> Use techniques like Grid Search or Random Search for hyperparameter optimization. Perform cross-validation to ensure the model's performance is consistent. </p>
            <Footer />
        </main>
    );
}
