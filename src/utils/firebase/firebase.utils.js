
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVK6bHSwyZtT22MSC1FuxCbovoP20iMrQ",
  authDomain: "crwn-clothing-db-b65c8.firebaseapp.com",
  projectId: "crwn-clothing-db-b65c8",
  storageBucket: "crwn-clothing-db-b65c8.appspot.com",
  messagingSenderId: "462671489770",
  appId: "1:462671489770:web:720ed73f9b4f0a0c360593"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);