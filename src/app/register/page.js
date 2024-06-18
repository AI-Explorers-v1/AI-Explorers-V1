"use client";

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, signInWithGoogle, signOutUser } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar'; // Adjust the path if necessary

const Register = () => {
  const [user] = useAuthState(auth);

  const registerUser = async () => {
    try {
      const userData = await signInWithGoogle();
      console.log('User Data:', userData); // Debugging log
      if (userData) {
        // Use a combination of UID and displayName as the document ID
        const documentId = `${userData.uid}-${userData.displayName.replace(/\s+/g, '_')}`;
        const userRef = doc(db, 'users', documentId);
        await setDoc(userRef, {
          uid: userData.uid,
          name: userData.displayName,
          email: userData.email,
          profilePicture: userData.photoURL,
        });
        console.log('User data written to Firestore');
      }
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-12 text-center text-3xl font-extrabold text-white">Register</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500"> sign in to your account</a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {user ? (
              <div>
                <p className="text-center text-white">Welcome, {user.displayName}</p>
                <button onClick={signOutUser} className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign Out
                </button>
              </div>
            ) : (
              <button onClick={registerUser} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Register with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
