import React, { useState, useEffect } from "react";
import "./Form.css";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [comments, setComments] = useState([]);
  const auth = getAuth(app);
  const storage = getStorage(app);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleClickButton = async () => {
    if (!auth.currentUser) {
      alert("コメントを投稿するにはサインインしてください。");
      return;
    }

    if (image) {
      const storageRef = ref(storage, "images/" + image.name);
      await uploadBytes(storageRef, image).then(async (snapshot) => {
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);
      });
    }

    const trimmedText = inputText.trim();
    if (trimmedText || imageUrl) {
      const db = getFirestore(app);
      const commentCollection = collection(db, "comments3");

      try {
        const newComment = {
          text: trimmedText,
          image: imageUrl,
          timestamp: new Date().toJSON(),
          user: {
            name: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          },
        };

        await addDoc(commentCollection, newComment);
        console.log("Document successfully added!");

        setInputText("");
        setImage(null);
        setImageUrl("");
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };

  const deleteCommentFromDatabase = async (commentId) => {
    const db = getFirestore(app);
    const commentCollection = collection(db, "comments3");

    try {
      await deleteDoc(doc(commentCollection, commentId));
      console.log("データベースからコメントが正常に削除されました！");
    } catch (error) {
      console.error("データベースからコメントを削除する際にエラーが発生しました: ", error);
    }
  };

  const deleteComment = async (comment) => {
    const confirmed = window.confirm("コメントを削除しますか?");

    if (confirmed) {
      try {
        if (auth.currentUser && comment.user && comment.user.name === auth.currentUser.displayName) {
          await deleteCommentFromDatabase(comment.id);
          setComments((prevComments) => prevComments.filter((c) => c.id !== comment.id));
          console.log("コメントが正常に削除されました！");
        } else {
          console.error("このコメントを削除する権限がありません。");
        }
      } catch (error) {
        console.error("コメントの削除中にエラーが発生しました: ", error);
      }
    }
  };

  const reportComment = async (comment) => {
    const confirmed = window.confirm("不適切な発言として管理者に報告しますか?");
  
    if (confirmed) {
      const db = getFirestore(app);
      const reportedCollection = collection(db, "reported");
  
      const reportedCommentData = {
        text: comment.text,
        image: comment.image,
        reportDate: new Date().toJSON(),
        reporter: auth.currentUser.displayName,
      };
  
      try {
        await addDoc(reportedCollection, reportedCommentData);
        console.log("通報されたコメントが正常に追加されました");
        // 通報が成功した場合、reportedCommentsステートから通報されたコメントを削除するなどの適切な対応を行います
      } catch (error) {
        console.error("エラー: ", error);
      }
    }
  };

  const fetchComments = async () => {
    const db = getFirestore(app);
    const commentCollection = collection(db, "comments3");
    const commentQuery = query(commentCollection, orderBy("timestamp", "desc"));

    try {
      const commentSnapshot = await getDocs(commentQuery);
      const commentData = commentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // ユーザー認証の状態変化をハンドル
    });
  }, [auth]);

  return (
    <div className="Form">
      <div className="sendMessage">
        <input
          type="text"
          placeholder="Enter text"
          value={inputText}
          onChange={handleInputChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button onClick={handleClickButton}>送信</button>
      </div>
      <ul>
  {comments.map((comment, index) => (
    <li key={comment.id}>
      <div>
        <p>{index + 1}. </p>
        {comment.user && (
          <div>
            <img src={comment.user.photoURL} alt={comment.user.name} />
            {comment.user && <p>{comment.user.name}:</p>}
          </div>
        )}
      </div>
      <div>
        {comment.image && (
          <p>
            <a href={comment.image} target="_blank" rel="noreferrer">
              画像を表示
            </a>
          </p>
        )}
        <p>{comment.text}</p>
      </div>
      <div className="timestamp">{comment.timestamp}</div>
      {auth.currentUser && (
        <button onClick={() => deleteComment(comment)}>削除</button>
      )}
      <button onClick={() => reportComment(comment)}>報告</button>
    </li>
  ))}
</ul>

      <p>
        Premier League Squearはユーザーの声を大事にしています。ご要望があれば
        <a href="mailto:mutowataru@gmail.com">mutowataru@gmail.com</a>
        までどうぞ。
      </p>
    </div>
  );
}

export default Form;