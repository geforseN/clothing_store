export enum UserActionTypes {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START = "users/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "users/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "users/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "users/SIGN_IN_FAILED",
  SIGN_UP_START = "users/SIGN_UP_START",
  SIGN_UP_SUCCESS = "users/SIGN_UP_SUCCESS",
  SIGN_UP_FAILED = "users/SIGN_UP_FAILED",
  SIGN_OUT_START = "users/SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "users/SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "users/SIGN_OUT_FAILED",
}
