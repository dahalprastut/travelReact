import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
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
