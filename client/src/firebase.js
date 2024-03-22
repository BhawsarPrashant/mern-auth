// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ddd00.firebaseapp.com",
  projectId: "mern-auth-ddd00",
  storageBucket: "mern-auth-ddd00.appspot.com",
  messagingSenderId: "1026767443350",
  appId: "1:1026767443350:web:fb6d041d66f9b6c9cfb9b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
