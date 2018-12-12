import axios from "axios";
import jwtDecode from "jsonwebtoken";
import Cookies from "cookie-monster";

export const isAuthenticated = () => {
  const token = Cookies.getItem("token");
  console.log("isAuthenticatedToken" + token);

  let result = Boolean(isAValidToken(token)) === true;
  Cookies.setItem("logged_in", result ? "yes" : "no", {path: "/"});
  console.log("result isAuth " + result);
  return result;
};

export const signOut = () => {
  Cookies.removeItem("token");
  Cookies.setItem("logged_in", "no", {path: "/"});
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

export const isAValidToken = (token) => {
  const validTokin = token !== null && token !== undefined;
  if (validTokin === true) {
    let userInfo = getUserInfo(token);
    return userInfo !== null && userInfo !== undefined;
  }
  return false;
};
