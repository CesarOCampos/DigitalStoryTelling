// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ4g_bWpOLCRq_StqTnOVz8lO2aiFnSJs",
  authDomain: "nextjs-firebase-961bd.firebaseapp.com",
  projectId: "nextjs-firebase-961bd",
  storageBucket: "nextjs-firebase-961bd.appspot.com",
  messagingSenderId: "387475825180",
  appId: "1:387475825180:web:a7c69fe5f9ead097e475d9",
  measurementId: "G-DXCMSTRP5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()