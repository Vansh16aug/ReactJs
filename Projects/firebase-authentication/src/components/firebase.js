// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";  // to fetch the data (For google login)
import {getFirestore} from "firebase/firestore"; // to fetch the data from the database

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "authentication-40dd8.firebaseapp.com",
  projectId: "authentication-40dd8",
  storageBucket: "authentication-40dd8.appspot.com",
  messagingSenderId: "291368208301",
  appId: "1:291368208301:web:185eabacabf43846940324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;