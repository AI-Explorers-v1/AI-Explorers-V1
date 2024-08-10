// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqRkT6rvNNLrzNeT5OZzqa4HTK6bC6WZ8",
  authDomain: "aiexplorers-14719.firebaseapp.com",
  projectId: "aiexplorers-14719",
  storageBucket: "aiexplorers-14719.appspot.com",
  messagingSenderId: "777885329971",
  appId: "1:777885329971:web:6c2a41762d17c5e99f1146",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { auth, db, signInWithGoogle, signOutUser, signInWithEmailAndPassword};
