// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-876f5.firebaseapp.com",
  projectId: "mern-auth-876f5",
  storageBucket: "mern-auth-876f5.appspot.com",
  messagingSenderId: "361916287548",
  appId: "1:361916287548:web:1273a46d56c8aaea345139"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);