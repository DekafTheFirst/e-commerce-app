// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import {
  getAuth,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDenEBBkiROru6Es2ZQNy5_TiVSO51GUw8",
  authDomain: "e-car-dealership.firebaseapp.com",
  databaseURL: "https://e-car-dealership-default-rtdb.firebaseio.com",
  projectId: "e-car-dealership",
  storageBucket: "e-car-dealership.appspot.com",
  messagingSenderId: "679257299934",
  appId: "1:679257299934:web:3fd5c2ea6cac2830615b4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export { app, db, auth, loginRequest, registerRequest, addDoc, collection };
