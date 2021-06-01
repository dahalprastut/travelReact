import axios from "axios";
import {
  getCurrentUser,
  setCurrentUser,
} from "./../helpers/utils";
import { baseUrl } from "./../constants/variables";

export const base = () => {
  const data = {
    baseURL: baseUrl + "api/v1",
    headers: {
      "content-type": "application/json",
    },
  };
  if (getCurrentUser() != null) {
    data.headers.Authorization = `Bearer ${
      getCurrentUser()?.token
    }`;
  }
  return axios.create(data);
};

export const viewUsers = async () => {
  return await base()
    .get("/users")
    .then(res => {
      return res.data.data.users;
    })
    .catch(err => {
      console.log(err);
      return err.message;
    });
};
