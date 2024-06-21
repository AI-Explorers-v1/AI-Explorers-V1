"use client";

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOutUser } from '../firebase'; // Ensure the path to firebase.js is correct
import Navbar from '../components/navbar'; // Adjust the path if necessary

const Profile = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-12 text-center text-3xl font-extrabold text-white">Profile</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {user ? (
              <div className="text-center text-white">
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <button
                  onClick={signOutUser}
                  className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="text-center text-white">
                <p>You are not logged in.</p>
                <a
                  href="/login"
                  className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Go to Login
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
