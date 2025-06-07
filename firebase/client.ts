// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdXt3b_ZMtV4qVgm_i4vcbSPys04jbBQE",
  authDomain: "prepnexus-2b0bb.firebaseapp.com",
  projectId: "prepnexus-2b0bb",
  storageBucket: "prepnexus-2b0bb.firebasestorage.app",
  messagingSenderId: "872576688095",
  appId: "1:872576688095:web:ea15594817b28c5067ae6a",
  measurementId: "G-4CR8VNT1K4",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
