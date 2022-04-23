// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXO_aVFKBbjhs0biIH8kmfKXpDsN9biCM",
  authDomain: "next-js-project-f3c63.firebaseapp.com",
  projectId: "next-js-project-f3c63",
  storageBucket: "next-js-project-f3c63.appspot.com",
  messagingSenderId: "991776715229",
  appId: "1:991776715229:web:3e4ada23176712258e4634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()