// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import {
  writeBatch,
  collection,
  query,
  doc,
  getDoc,
  setDoc,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  serverTimestamp
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  NextOrObserver
} from "firebase/auth";

import {Category} from "../../store/category/category.types";
import {AdditionalInformation, ObjectToAdd, UserData} from "./firebase.types";


initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  "prompt": "select_account"
});


export const getCategoriesAndDocuments = async (): Promise<Array<Category>> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category);
};


const userData = (
  userAuthorization: User,
  additionalInformation = {} as AdditionalInformation
) => ({
  displayName: userAuthorization.displayName,
  email: userAuthorization.email,
  createdAt: serverTimestamp(),
  ...additionalInformation,
})


export const createUserDocumentFromAuthorization = async (
  userAuthorization: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuthorization) return;

  const userDocRef = doc(db, 'users', userAuthorization.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) return userSnapshot as QueryDocumentSnapshot<UserData>;

  try {
    await setDoc(userDocRef, userData(
      userAuthorization, additionalInformation
    ));
  } catch (error) {
    console.log(error);
  }
}


export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const createAuthUserWithEmailAndPassword = async (
  email: string, password: string
) => {
  return !(email && password) ? undefined :
    await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (
  email: string, password: string
) => {
  return !(email && password) ? undefined :
    await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => await signOut(auth);


export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
}


/* NO USAGES */

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);


export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: Array<T>
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
}