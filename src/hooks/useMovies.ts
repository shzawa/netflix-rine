import { useEffect, useState } from "react";
import { fetchMovieDatabase } from "../libs/api";
import { Movie } from "../models/movie";

export const useMovies = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await fetchMovieDatabase(url);
      if (!error) {
        setMovies(data.results);
      }
    }
    fetchData();
  }, [url]);

  return {
    movies
  };
};
