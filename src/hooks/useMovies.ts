import axios from "axios";
import { useEffect, useState } from "react";
import { apiClient } from "../libs/api";
import { Movie } from "../models/movie";

export const useMovies = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await apiClient.get(url);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response);
        }
      }
    }
    fetchData();
  }, [url]);

  return {
    movies
  };
};
