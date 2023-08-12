// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXSEZpXuQIttv4IGFmLdHFVhr3j1bDAg4",
  authDomain: "react-233ca.firebaseapp.com",
  projectId: "react-233ca",
  storageBucket: "react-233ca.appspot.com",
  messagingSenderId: "116371538065",
  appId: "1:116371538065:web:75438cb6288246190a3f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)