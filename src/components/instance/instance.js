import axios from "axios";


export const API_KEY = "e18ad800950cc61dbaa56a2fad2a2666";
export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000, 
});

// Interceptor للطلبات (اختياري لعرض اللوج أو إضافة headers)
instance.interceptors.request.use(
  (config) => {
    console.log("Request Sent:", config.url);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Interceptor للردود (اختياري للمعالجة العامة)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default instance;
