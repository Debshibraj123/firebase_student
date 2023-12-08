// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhSfW_2qqTOjI3AWrU6UsuRLon36d_xcE",
  authDomain: "news-app-f098d.firebaseapp.com",
  projectId: "news-app-f098d",
  storageBucket: "news-app-f098d.appspot.com",
  messagingSenderId: "607527192801",
  appId: "1:607527192801:web:71c09b822e6e181afccfa0",
  measurementId: "G-GYXG947J0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();