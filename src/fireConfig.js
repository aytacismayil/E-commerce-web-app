import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDrzB0V8gAw-zF_kjyL4Zx28-N20-4yLAc",
  authDomain: "firecommerce-73784.firebaseapp.com",
  projectId: "firecommerce-73784",
  storageBucket: "firecommerce-73784.appspot.com",
  messagingSenderId: "933945324162",
  appId: "1:933945324162:web:d4aae06243b58b11befa9b",
  measurementId: "G-SZ772L0D61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;
