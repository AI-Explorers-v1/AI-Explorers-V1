// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqRkT6rvNNLrzNeT5OZzqa4HTK6bC6WZ8",
  authDomain: "aiexplorers-14719.firebaseapp.com",
  projectId: "aiexplorers-14719",
  storageBucket: "aiexplorers-14719.appspot.com",
  messagingSenderId: "777885329971",
  appId: "1:777885329971:web:6c2a41762d17c5e99f1146",
  measurementId: "G-VVLBEJQ3QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);