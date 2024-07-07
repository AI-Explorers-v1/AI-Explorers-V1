"use client";

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, signOutUser } from '../firebase'; // Correct path to firebase.js
import FullWidthNavbar from '@/app/components/FullWidthNavbar';

const Login = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-900 min-h-screen">
      <FullWidthNavbar />
      <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-12 text-center text-3xl font-extrabold text-white">Login</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or
            <a href="/register" className="font-medium text-blue-600 hover:text-blue-500"> create a new account</a>
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
              <button onClick={signInWithGoogle} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Login with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
