// All Actions global variable here

// AUTH
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS =
  "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

// Export everything from every action
export * from "./auth/action";
