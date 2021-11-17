import axios from "axios";
const Base_URL="http://localhost:5000/trackify";
// const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root"))).currentUser.accessToken;

 //const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
 const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser===null?
  "":JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  
 console.log(TOKEN);

export const publicRequest=axios.create({
    baseURL:Base_URL,
});
export const userRequest=axios.create({
    baseURL:Base_URL,
    headers:{token:`Bearer ${TOKEN}` }
});