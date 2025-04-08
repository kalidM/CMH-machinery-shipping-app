// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAislyUtvDY41D9y3pOXjxRSAbTQUa_fkA",
  authDomain: "chm-machinery-shipping.firebaseapp.com",
  projectId: "chm-machinery-shipping",
  storageBucket: "chm-machinery-shipping.firebasestorage.app",
  messagingSenderId: "770737852351",
  appId: "1:770737852351:web:45dda2c471450c0ccf5b0a",
  measurementId: "G-VVJW1KF7Q4"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
