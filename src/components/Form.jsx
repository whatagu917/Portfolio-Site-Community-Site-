import React from "react";
import "./Form.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite'; // Import addDoc function

const firebaseConfig = {
  apiKey: "AIzaSyDLbnTH6fNt93DahJsNeq8mfWMMLNatShw",
  authDomain: "my-new-react-app3.firebaseapp.com",
  projectId: "my-new-react-app3",
  storageBucket: "my-new-react-app3.appspot.com",
  messagingSenderId: "405468033744",
  appId: "1:405468033744:web:9ded104c8ac41f1b0b64d5",
};

const app = initializeApp(firebaseConfig);

function Form() {
  const handleClickFetchButton = async () => {
    // ... (existing code)
  };

  const handleClickAddButton = async () => {
    const db = getFirestore(app);
    const commentCollection = collection(db, "comments");

    try {
      // Add a new document to the "comments" collection
      const newComment = {
        text: "This is a new comment", // Customize this as needed
        timestamp: new Date().toJSON(),
      };

      // Use the addDoc function to add the document
      await addDoc(commentCollection, newComment);

      console.log("Document successfully added!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="Form">
      <h1>Hello World</h1>
      <button onClick={handleClickFetchButton}>取得</button>
      <button onClick={handleClickAddButton}>追加</button> {/* Add button for adding data */}
    </div>
  );
}

export default Form;
