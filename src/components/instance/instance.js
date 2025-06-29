import axios from "axios";


export const API_KEY = "e18ad800950cc61dbaa56a2fad2a2666";
export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000, 
});




export default instance;
