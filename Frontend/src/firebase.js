// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDYBm3MGFkqKYK7EYcQ3xMeAbekt-E5g",
    authDomain: "profile-thumbeja.firebaseapp.com",
    projectId: "profile-thumbeja",
    storageBucket: "profile-thumbeja.appspot.com",
    messagingSenderId: "888791513201",
    appId: "1:888791513201:web:4d52f288703b082ed503d0",
    measurementId: "G-0X7F7LRWH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
