// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSJeLi7pcA5ejmKA8z31nEmOr8zY3I1tE",
  authDomain: "portfolio-website-43eb1.firebaseapp.com",
  projectId: "portfolio-website-43eb1",
  storageBucket: "portfolio-website-43eb1.appspot.com",
  messagingSenderId: "804650178056",
  appId: "1:804650178056:web:aefe9ac956a4d2bb1ca3bd",
  measurementId: "G-DPYB6S1HY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const db = getFirestore();

export { app, db };
