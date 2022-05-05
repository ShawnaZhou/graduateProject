/**
 * loginAPI
 * regAPI
 * predictionAPI
 * userinfoAPI
 * getuserinfoAPI
 */

const localAPI = "http://127.0.0.1:8080";
const loginAPI = localAPI + "/login";
const regAPI = localAPI + "/register";
const predictionAPI = localAPI + "/predict";
const userinfoAPI = localAPI + "/user/info";
const getuserinfoAPI = localAPI + "/user/info?userId=";

export { loginAPI, regAPI, predictionAPI, userinfoAPI, getuserinfoAPI };

