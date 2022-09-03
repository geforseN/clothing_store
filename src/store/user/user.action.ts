import {UserActionTypes} from './user.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

import {User} from 'firebase/auth';
import {UserData, AdditionalInformation} from "../../utils/firebase/firebase.types";


type Email = {email: string}
type Password = {password: string}
type DisplayName = {displayName: string}

type EmailAndPassword = Email & Password
type EmailAndPasswordAndDisplayName = EmailAndPassword & DisplayName

export type CheckUserSession = Action<
  UserActionTypes.CHECK_USER_SESSION
>

export type GoogleSignInStart = Action<
  UserActionTypes.GOOGLE_SIGN_IN_START
>

export type EmailSignInStart = ActionWithPayload<
  UserActionTypes.EMAIL_SIGN_IN_START, EmailAndPassword
>

export type SignInSuccess = ActionWithPayload<
  UserActionTypes.SIGN_IN_SUCCESS, UserData
>

export type SignInFailed = ActionWithPayload<
  UserActionTypes.SIGN_IN_FAILED, Error
>

export type SignUpStart = ActionWithPayload<
  UserActionTypes.SIGN_UP_START, EmailAndPasswordAndDisplayName
>

export type SignUpSuccess = ActionWithPayload<
  UserActionTypes.SIGN_UP_SUCCESS,
  {userAuthorization: User; additionalInformation: AdditionalInformation}
>

export type SignUpFailed = ActionWithPayload<
  UserActionTypes.SIGN_UP_FAILED, Error
>

export type SignOutStart = Action<
  UserActionTypes.SIGN_OUT_START
>

export type SignOutSuccess = Action<
  UserActionTypes.SIGN_OUT_SUCCESS
>

export type SignOutFailed = ActionWithPayload<
  UserActionTypes.SIGN_OUT_FAILED, Error
>


export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(UserActionTypes.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(UserActionTypes.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => (
    createAction(UserActionTypes.EMAIL_SIGN_IN_START, { email, password })
  )
);

export const signInSuccess = withMatcher(
  (user: UserData & {id: string}): SignInSuccess => (
    createAction(UserActionTypes.SIGN_IN_SUCCESS, user)
  )
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed => (
    createAction(UserActionTypes.SIGN_IN_FAILED, error)
  )
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => (
    createAction(
      UserActionTypes.SIGN_UP_START,
      {email, password, displayName}
    )
  )
);

export const signUpSuccess = withMatcher(
  (userAuthorization: User, additionalInformation: AdditionalInformation): SignUpSuccess => (
    createAction(
      UserActionTypes.SIGN_UP_SUCCESS,
      {userAuthorization, additionalInformation}
    )
  )
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed => (
    createAction(UserActionTypes.SIGN_UP_FAILED, error)
  )
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(UserActionTypes.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(UserActionTypes.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed => (
    createAction(UserActionTypes.SIGN_OUT_FAILED, error)
  )
);