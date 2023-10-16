import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Login(){
  const [ user ] = useAuthState(auth);

  return (
  <div>
    {user ? (
      <>

      <UserInfo/>
      <SignOutButton/>
      </>
    ) : (
      <SignInButton/>
    )}
  </div>
  );
}

export default Login;

function SignInButton(){
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
};

  return(
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}

function SignOutButton(){
  return (
  <button onClick={() => auth.signOut()}>
  <p>サインアウト</p>
</button>
  );
}

function UserInfo(){
  return(
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt=""/>
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
}
  