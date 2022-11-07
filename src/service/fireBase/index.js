// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQZCL9rwW0NPfUhoi5ZRG43IfDQYIM3SE",
  authDomain: "coderhouse-2197.firebaseapp.com",
  projectId: "coderhouse-2197",
  storageBucket: "coderhouse-2197.appspot.com",
  messagingSenderId: "985545606445",
  appId: "1:985545606445:web:083482cb6fef12a845bfa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// uso la base de datos de mi proyecto
export const db = getFirestore(app)