// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
    const userDoc = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists()) {
      window.location.href = '/register';
      return null;
    }

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

const calculateRank = (progress) => {
  const completedChapters = Object.values(progress).filter(status => status === 'completed').length;
  switch (completedChapters) {
    case 1:
      return 'Beginner';
    case 2:
      return 'Intermediate';
    case 3:
      return 'Advanced';
    case 4:
      return 'Expert';
    case 5:
      return 'AI Explorer';
    default:
      return 'Newbie';
  }
};

const updateRank = async (userDoc, progress) => {
  try {
    const rank = calculateRank(progress);
    await setDoc(userDoc, { rank }, { merge: true });
  } catch (error) {
    console.error("Error updating rank: ", error);
  }
};

const saveProgress = async (chapter, status) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");
    const userDoc = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDoc);
    let progress = {};
    if (userSnapshot.exists()) {
      progress = userSnapshot.data().progress || {};
    }
    progress[chapter] = status;
    await setDoc(userDoc, { progress }, { merge: true });
    await updateRank(userDoc, progress);
  } catch (error) {
    console.error("Error saving progress: ", error);
  }
};

const getProgress = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No user signed in");
    const userDoc = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDoc);
    if (userSnapshot.exists()) {
      const data = userSnapshot.data();
      return data.progress || {};
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error getting progress: ", error);
    return {};
  }
};

export { auth, db, signInWithGoogle, signOutUser, signInWithEmailAndPassword, saveProgress, getProgress, calculateRank };
