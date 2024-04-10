// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "houston-luxury-homes-91138.firebaseapp.com",
  projectId: "houston-luxury-homes-91138",
  storageBucket: "houston-luxury-homes-91138.appspot.com",
  messagingSenderId: "744771760748",
  appId: "1:744771760748:web:b72c1940a2525b77f61e49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);