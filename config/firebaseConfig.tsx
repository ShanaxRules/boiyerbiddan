// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "image-generator-9756f.firebaseapp.com",
  projectId: "image-generator-9756f",
  storageBucket: "image-generator-9756f.firebasestorage.app",
  messagingSenderId: "622087951309",
  appId: "1:622087951309:web:6fa57e06fa087d966c6a84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)