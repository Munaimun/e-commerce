import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/FireBaseUtils";
import SignUpForm from "../../sign-up-form/SignUpForm";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithRedirect();
    console.log({ user });
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SingIn;
