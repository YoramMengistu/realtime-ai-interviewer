// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxntqdX41nWX7WUAWEdb5k_Gg2B2D8d4g",
  authDomain: "voiceagent-prepwise.firebaseapp.com",
  projectId: "voiceagent-prepwise",
  storageBucket: "voiceagent-prepwise.firebasestorage.app",
  messagingSenderId: "363427580217",
  appId: "1:363427580217:web:422dd6df467c881d20c0e8",
  measurementId: "G-RFEPVFFT69",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
