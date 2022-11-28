// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDenEBBkiROru6Es2ZQNy5_TiVSO51GUw8",
  authDomain: "e-car-dealership.firebaseapp.com",
  projectId: "e-car-dealership",
  storageBucket: "e-car-dealership.appspot.com",
  messagingSenderId: "679257299934",
  appId: "1:679257299934:web:3fd5c2ea6cac2830615b4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
