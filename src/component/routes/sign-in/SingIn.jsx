import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/FireBaseUtils";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }; 

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google popup</button>
    </div>
  );
};

export default SingIn;
