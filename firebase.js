import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqE2CG_bwVG_HBpX96ZcWW6nSxXN4up98",
  authDomain: "password-management-app-ca97a.firebaseapp.com",
  projectId: "password-management-app-ca97a",
  storageBucket: "password-management-app-ca97a.appspot.com",
  messagingSenderId: "353746831224",
  appId: "1:353746831224:web:441fef8c6199353da62a8d",
  measurementId: "G-BP84B5VX3M",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };