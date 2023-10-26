// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLbnTH6fNt93DahJsNeq8mfWMMLNatShw",
  authDomain: "my-new-react-app3.firebaseapp.com",
  projectId: "my-new-react-app3",
  storageBucket: "my-new-react-app3.appspot.com",
  messagingSenderId: "405468033744",
  appId: "1:405468033744:web:9ded104c8ac41f1b0b64d5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, };
