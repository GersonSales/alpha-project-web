import axios from "axios";
import jwtDecode from "jsonwebtoken";
import {instanceOf} from "prop-types";
import {Cookies} from "react-cookie";

export const isAuthenticated = () => {
  return false;
};

export const getUserInfo = async (token) => {
  try {
    const config = {
      headers: {}
    };
    config.headers = {token: token};
    const {id} = jwtDecode.decode(token);
    const {data} = await axios.get("http://localhost:3030/user/" + id, config);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const isAValidToken = async (token) => {
  return getUserInfo(token) !== null;
};
