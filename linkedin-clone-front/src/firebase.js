import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdDWRXwUa2ClAfTuyUSnILxF4nK-utco",
  authDomain: "linkedin-clone-f7dd7.firebaseapp.com",
  projectId: "linkedin-clone-f7dd7",
  storageBucket: "linkedin-clone-f7dd7.appspot.com",
  messagingSenderId: "53205734326",
  appId: "1:53205734326:web:8e36fc80d6e898743e2717"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };