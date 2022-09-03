import {AnyAction} from "redux";
import {UserData} from "../../utils/firebase/firebase.types";
import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null,
}



const userInitialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userReducer = (state = userInitialState, action: AnyAction) => {

  if (signInSuccess.match(action)) {
    return {...state, currentUser: action.payload};
  }

  if (signOutSuccess.match(action)) {
    return {...state, currentUser: null}
  }
  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {...state, error: action.payload}
  }

  return state;
}