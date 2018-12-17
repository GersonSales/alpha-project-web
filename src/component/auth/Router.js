import Cookies from "cookie-monster";
import axios from "axios";


const BASE_URL = "http://localhost:3030/";
const USER_ROUTE = BASE_URL + "user/";
const routes = [{
  user: `${BASE_URL}user`
}];


export const getAllUsers = () => {
  // axios.get(routes.user)
  //   .then((result) => {
  //     return result;
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  return [
    {
      "firstName": "User",
      "lastName": "Name",
      "email": "user@email.com",
      "phone": "(99)99999-9999",
      "password": "userPassword",
      "role": "CLIENT"
    }
  ];
};

const getToken = () => {
  const token = Cookies.getItem("token");
  return {headers: token};


};


export const PostUser = (user) => {
  axios.post(USER_ROUTE, user)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })

};