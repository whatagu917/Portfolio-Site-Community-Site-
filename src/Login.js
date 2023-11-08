import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <>
          <UserInfo user={user} /> {/* ユーザー情報を渡す */}
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}

function SignOutButton() {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <button onClick={signOut}>
      <p>サインアウト</p>
    </button>
  );
}

function UserInfo({ user }) {
  return (
    <div className="userInfo">
      <img src={user.photoURL} alt="" />
      <p>{user.displayName} でログイン中</p>
    </div>
  );
}

export default Login;
