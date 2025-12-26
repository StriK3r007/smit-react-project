// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDecK05A-vfc6tdVWAsiaxQbA9iQgqXNzU",
    authDomain: "expense-management-syste-1463b.firebaseapp.com",
    projectId: "expense-management-syste-1463b",
    storageBucket: "expense-management-syste-1463b.firebasestorage.app",
    messagingSenderId: "277026341652",
    appId: "1:277026341652:web:e53cf8b18cbf0a47dd3801",
    measurementId: "G-5L1NFJPFZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);