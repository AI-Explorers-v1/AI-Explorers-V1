"use client";

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, signOutUser, db } from '../firebase';
import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import { setDoc, doc } from 'firebase/firestore';

const Register = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    profilePicture: '',
  });

  const handleRegister = async () => {
    if (user) {
      const userDoc = doc(db, 'users', user.uid);
      await setDoc(userDoc, {
        name: profile.name,
        email: user.email,
        profilePicture: user.photoURL,
        progress: {
          chapter1: 'not started',
          chapter2: 'not started',
          chapter3: 'not started',
          chapter4: 'not started',
          chapter5: 'not started',
        },
      });
      window.location.href = '/';
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <FullWidthNavbar />
      <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-12 text-center text-3xl font-extrabold text-white">Register</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500"> login to your account</a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {user ? (
              <div>
                <p className="text-center text-white">Welcome, {user.displayName}</p>
                <div className="mt-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={profile.name}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white"
                  />
                </div>
                <button onClick={handleRegister} className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Complete Registration
                </button>
              </div>
            ) : (
              <button onClick={signInWithGoogle} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
