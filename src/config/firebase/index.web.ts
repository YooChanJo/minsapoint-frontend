/* Firebase functionalities should be split between web and mobile */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_5PQ8BppsTf_I2vqMoDRyq3CMZKUE7U",
  authDomain: "minsapoint.firebaseapp.com",
  projectId: "minsapoint",
  storageBucket: "minsapoint.firebasestorage.app",
  messagingSenderId: "456076951299",
  appId: "1:456076951299:web:8dac1f3070e6f1a44c3336",
  measurementId: "G-K5SLP3ZZQ9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
