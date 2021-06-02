import {
  all,
  fork,
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import { GET_USERS, SIGN_UP } from "./../actions";
import {
  getUsersSuccess,
  getUsersError,
  signUpSuccess,
  signUpError,
  signUp,
} from "./action";
import { setCurrentUser } from "./../../helpers/utils";
import {
  viewUsers,
  register,
} from "./../../data/api";

export function* watchGetUser() {
  yield takeEvery(GET_USERS, getUsers);
}

const ViewUsersAsync = async () => viewUsers();

function* getUsers() {
  try {
    const users = yield call(ViewUsersAsync);
    if (!users.message) {
      yield put(getUsersSuccess(users));
    } else {
      yield put(getUsersError(users.message));
    }
  } catch (err) {
    yield put(getUsersError(err));
  }
}

export function* watchSignUpUser() {
  yield takeEvery(SIGN_UP, signUpUser);
}

const signUpUserAsync = async body =>
  register(body);

function* signUpUser({ payload }) {
  try {
    const postedUser = yield call(
      signUpUserAsync,
      payload.data
    );
    if (!postedUser.message) {
      setCurrentUser(postedUser);
      payload.history.push("/app");
      yield put(signUpSuccess(postedUser));
    } else {
      yield put(signUpError(postedUser.message));
    }
  } catch (err) {
    yield put(signUpError(err));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetUser),
    fork(watchSignUpUser),
  ]);
}
