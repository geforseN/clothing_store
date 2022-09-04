import {takeLatest, put, all, call} from "typed-redux-saga/macro";

import {UserActionTypes} from "./user.types";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpSuccess,
  SignUpStart,
} from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuthorization,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {User} from "firebase/auth";

import {AdditionalInformation} from "../../utils/firebase/firebase.types";


export function* getSnapshotFromUserAuthorization(
  userAuth: User, additionalInformation?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuthorization,
      userAuth,
      additionalInformation
    );
    if (userSnapshot) {
      yield* put(signInSuccess(
        {id: userSnapshot.id, ...userSnapshot.data()}
      ));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuthorization, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuthorization, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({payload: {email, password}}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword, email, password
    );

    if (userCredential) {
      yield* call(getSnapshotFromUserAuthorization, userCredential.user);
    }

  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp(
  {payload: {email, password, displayName}}: SignUpStart
) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword, email, password
    );
    if (userCredential) {
      yield* put(signUpSuccess(userCredential.user, {displayName}));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignUp(
  {payload: {userAuthorization, additionalInformation}}: SignUpSuccess
) {
  yield* call(getSnapshotFromUserAuthorization, userAuthorization, additionalInformation);
}

/*                                                       */

export function* onGoogleSignInStart() {
  yield* takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield* takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
  yield* takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}



export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
