import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({children}: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value: any = {currentUser, setCurrentUser};

  useEffect(() => {
    return onAuthStateChangedListener(async (user: any) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}