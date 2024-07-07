"use client";

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOutUser } from '../firebase'; // Ensure the path to firebase.js is correct
import FullWidthNavbar from '@/app/components/FullWidthNavbar';

const Profile = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        <FullWidthNavbar />
        <div>
          <h1 className="text-3xl">Please sign in to view your profile.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <FullWidthNavbar />
      <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-12 text-center text-3xl font-extrabold text-white">Your Profile</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="flex flex-col items-center">
              <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-white">{user.displayName}</h3>
              <p className="mt-2 text-gray-400">{user.email}</p>
              <p className="mt-4 text-lg font-semibold text-white">Rank: Newbie</p>
              <button
                onClick={signOutUser}
                className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
