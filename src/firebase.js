// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMCWR8mTIjIUeFvq6MBAMDiIzDUisrt6E",
  authDomain: "para-ale-9056b.firebaseapp.com",
  projectId: "para-ale-9056b",
  storageBucket: "para-ale-9056b.firebasestorage.app",
  messagingSenderId: "832044306084",
  appId: "1:832044306084:web:a12fd5fac0ec94cb2b6031",
  measurementId: "G-MJGBY40P37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);