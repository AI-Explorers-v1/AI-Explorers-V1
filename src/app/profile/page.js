"use client";

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOutUser, getProgress, calculateRank } from '../firebase'; // Ensure the path to firebase.js is correct
import FullWidthNavbar from '@/app/components/FullWidthNavbar';
import Footer from "@/app/components/footer";
import { motion } from 'framer-motion';

const Profile = () => {
  const [user] = useAuthState(auth);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rank, setRank] = useState('Newbie');

  useEffect(() => {
    setIsLoaded(true);
    const fetchProgress = async () => {
      const progress = await getProgress();
      const calculatedRank = calculateRank(progress);
      setRank(calculatedRank);
    };

    if (user) {
      fetchProgress();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative">
        <FullWidthNavbar />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative flex-grow flex items-center justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl"
          >
            Please sign in to view your profile.
          </motion.h1>
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>
    );
  }

  const rankStyles = {
    Newbie: 'bg-gray-300 text-gray-300 font-normal',
    Beginner: 'bg-green-300 text-green-300 font-normal',
    Intermediate: 'bg-blue-300 text-blue-300 font-semibold',
    Advanced: 'bg-purple-300 text-purple-300 font-semibold italic',
    Expert: 'bg-red-300 text-red-300 font-bold italic',
    'AI Explorer': 'bg-yellow-300 text-yellow-300 font-extrabold italic underline',
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative">
      <FullWidthNavbar />
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="relative flex-grow flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center text-3xl font-extrabold text-white"
          >
            Your Profile
          </motion.h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className={`w-24 h-24 rounded-full ${rankStyles[rank].split(' ')[0]} p-1`}
                style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  backgroundColor: rankStyles[rank].split(' ')[0],
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="rounded-full"
                />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-4 text-xl font-semibold text-white"
              >
                {user.displayName}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-2 text-gray-400"
              >
                {user.email}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1 }}
                className={`mt-4 text-lg font-semibold ${rankStyles[rank].split(' ').slice(1).join(' ')}`}
              >
                Rank: {rank}
              </motion.p>
              <motion.button
                onClick={signOutUser}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Out
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
