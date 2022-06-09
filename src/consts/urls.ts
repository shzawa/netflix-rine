import { API_KEY } from "./env";

export const ImageUrls = {
  Base: "https://image.tmdb.org/t/p/original",
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  ActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  ComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  RomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  DocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`
};
