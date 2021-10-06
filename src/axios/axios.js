import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "http://172.104.34.197/nlp-web-demo/",
});
