// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfzqrto6D8PECSCVq5ZeW_b7Hwnsi2jKo",
  authDomain: "skyncare-e5f8a.firebaseapp.com",
  databaseURL: "https://skyncare-e5f8a-default-rtdb.firebaseio.com",
  projectId: "skyncare-e5f8a",
  storageBucket: "skyncare-e5f8a.appspot.com",
  messagingSenderId: "836016716768",
  appId: "1:836016716768:web:6a5cab37057c42bda44985"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase = getAuth(app)