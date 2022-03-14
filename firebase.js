import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDPLJNGsFHS9RCeUnjtHneA7md4kT6d2o0",
  authDomain: "didi-8609d.firebaseapp.com",
  projectId: "didi-8609d",
  storageBucket: "didi-8609d.appspot.com",
  messagingSenderId: "1088532732434",
  appId: "1:1088532732434:web:e1e41398dd1b622dbf96cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app)

