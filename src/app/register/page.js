"use client";

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, signInWithGoogle, signOutUser } from '../firebase'; // Correct path to firebase.js
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [user] = useAuthState(auth);

  const registerUser = async () => {
    try {
      const userData = await signInWithGoogle();
      console.log('User Data:', userData); // Debugging log
      if (userData) {
        // Use a combination of UID and displayName as the document ID
        const documentId = `${userData.uid}-${userData.displayName}`;
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
    <div className="container">
      <h1>Register</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={signOutUser}>Sign Out</button>
        </div>
      ) : (
        <button onClick={registerUser}>Register with Google</button>
      )}
    </div>
  );
};

export default Register;
