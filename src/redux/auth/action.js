import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from "./../actions";

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersError = error => ({
  type: GET_USERS_ERROR,
  payload: error,
});

export const signUp = (data, history) => ({
  type: SIGN_UP,
  payload: { data, history },
});

export const signUpSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpError = error => ({
  type: SIGN_UP_ERROR,
  payload: error,
});
