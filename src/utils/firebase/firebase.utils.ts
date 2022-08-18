import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

import firebaseConfig from "./firebaseConfig";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  "prompt": "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation = {}
) => {

  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) return userDocRef;


  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    });
  } catch (e: any) {
    console.log(e.message)
  }

}

export const createAuthUserWithEmailAndPassword = async (
  email: string, password: string
) => {
  if (!(email && password)) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string, password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};