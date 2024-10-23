// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3TkQpRplwIaSh-D4u_YnlL2X6X_s6MqQ",
  authDomain: "testproject-420417.firebaseapp.com",
  projectId: "testproject-420417",
  storageBucket: "testproject-420417.appspot.com",
  messagingSenderId: "864607532715",
  appId: "1:864607532715:web:0d029e9561e6675d5fe9ee",
  measurementId: "G-CFCP1FENQ6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);