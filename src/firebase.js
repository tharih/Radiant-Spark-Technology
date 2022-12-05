// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtgHA0Pp5vC7J22N80jwqpGNXdlTjas8c",
  authDomain: "fir-auth-98b03.firebaseapp.com",
  projectId: "fir-auth-98b03",
  storageBucket: "fir-auth-98b03.appspot.com",
  messagingSenderId: "1054294172474",
  appId: "1:1054294172474:web:f16e67d042fd48611ca603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);// Initialize Auth and get a reference to the service

