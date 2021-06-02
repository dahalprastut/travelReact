import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from "./../actions";

const initialState = {
  error: "",
  loading: false,
  users: [],
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SIGN_UP:
      return {
        ...state,
        loading: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
