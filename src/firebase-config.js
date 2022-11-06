import {
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from 'firebase/firestore'
import {
  getAuth
} from 'firebase/auth'
import {
  getStorage
} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBGo679LUJ94eaT5O-L-k30CuPa4khqj1w",
  authDomain: "capstone-dilmun.firebaseapp.com",
  projectId: "capstone-dilmun",
  storageBucket: "capstone-dilmun.appspot.com",
  messagingSenderId: "382842867534",
  appId: "1:382842867534:web:ab6d944d9c52d9f5e8581f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app);

export const storage = getStorage(app)

export default app