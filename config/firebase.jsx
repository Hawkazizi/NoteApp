// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBnkPYqfpXlKTomIqQXqQx43SM4kA0eOdY",
  authDomain: "noteapp-8153b.firebaseapp.com",
  projectId: "noteapp-8153b",
  storageBucket: "noteapp-8153b.appspot.com",
  messagingSenderId: "560091074696",
  appId: "1:560091074696:web:f8fd768141eb4d06984f3d",
  measurementId: "G-H8559Z23R6",
};

export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googelProvider = new GoogleAuthProvider();
