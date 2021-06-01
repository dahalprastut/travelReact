import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "./../actions";

const initialState = {
  error: "",
  loading: false,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
        error: "",
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
    default:
      return state;
  }
};
