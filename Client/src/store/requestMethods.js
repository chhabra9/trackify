import axios from "axios";
const Base_URL="http://localhost:5000/trackify";
// const TOKEN="";
// const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
//   "":JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user));
const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
  "":JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  
export const publicRequest=axios.create({
    baseURL:Base_URL,
});
export const userRequest=axios.create({
    baseURL:Base_URL,
    headers:{token:`Bearer ${TOKEN}` }
});