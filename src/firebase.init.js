// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwadsm55elQ6wHSSZGIBTWuS2oUSFeCMM",
  authDomain: "genius-car-service-d69ed.firebaseapp.com",
  projectId: "genius-car-service-d69ed",
  storageBucket: "genius-car-service-d69ed.appspot.com",
  messagingSenderId: "690012284036",
  appId: "1:690012284036:web:424d64aa27b8abd4f28ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;