import {
  all,
  fork,
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import { GET_USERS } from "./../actions";
import {
  getUsersSuccess,
  getUsersError,
} from "./action";
import { viewUsers } from "./../../data/api";

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

export default function* rootSaga() {
  yield all([fork(watchGetUser)]);
}
