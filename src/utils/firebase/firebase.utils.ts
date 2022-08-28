// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from "firebase/app";

import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch,} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import firebaseConfig from "./firebaseConfig";
import SHOP_DATA from "../../data/categories";

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  "prompt": "select_account"
});

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: typeof SHOP_DATA
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.reduce((acc, docSnapshot) => {
    // TODO {title, imageURL, id?, items} = docSnapshot.data()
    const {title, items} = docSnapshot.data() // as typeof SHOP_DATA;
    // @ts-ignore as
    acc[title.toLowerCase()] = items;
    return acc // as typeof SHOP_DATA;
  }, {});
};
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


export const signOutUser = async () =>
  await signOut(auth);


export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);
