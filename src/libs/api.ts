import axios from "axios";

//TMDBからのbaseURLリクエストを作成
export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});
