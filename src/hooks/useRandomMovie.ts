import { useEffect, useState } from "react";
import { ImageUrls } from "../consts/urls";
import { fetchMovieDatabase } from "../libs/api";

type MovieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const useRandomMovie = () => {
  const [movie, setMovie] = useState<MovieProps>({});
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await fetchMovieDatabase(
        ImageUrls.NetflixOriginals
      );
      console.log(data.result);
      if (!error) {
        // apiからランダムで値を取得している
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      }
    }
    fetchData();
  }, []);

  return {
    movie
  };
};
