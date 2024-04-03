// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeEZsHcJA6_LWj-ldemIGqHDSx4k1SUrY",
    authDomain: "kostmanagertm.firebaseapp.com",
    projectId: "kostmanagertm",
    storageBucket: "kostmanagertm.appspot.com",
    messagingSenderId: "787015160181",
    appId: "1:787015160181:web:4530c1098933b04cd1433c",
    measurementId: "G-EQVXGNTWMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);