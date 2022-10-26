// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGo679LUJ94eaT5O-L-k30CuPa4khqj1w",
  authDomain: "capstone-dilmun.firebaseapp.com",
  projectId: "capstone-dilmun",
  storageBucket: "capstone-dilmun.appspot.com",
  messagingSenderId: "382842867534",
  appId: "1:382842867534:web:ab6d944d9c52d9f5e8581f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);

