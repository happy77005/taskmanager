// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this for Firebase Auth
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBti-fS1dFpd_vV-OgmCGAUqTbiAPiwfxm",
  authDomain: "taskmanager-cffd9.firebaseapp.com",
  projectId: "taskmanager-cffd9",
  storageBucket: "taskmanager-cffd9.appspot.com",
  messagingSenderId: "853216264564",
  appId: "1:853216264564:web:aab9d9d93971c20a632c21",
  measurementId: "G-FBQT9RZPWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const analytics = getAnalytics(app); // Initialize Analytics (optional)
