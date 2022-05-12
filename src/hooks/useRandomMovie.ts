import { request } from "https";
import { useEffect, useState } from "react";
import { Urls } from "../consts/urls";
import { apiClient } from "../libs/api";

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
      const { data } = await apiClient.get(Urls.NetflixOriginals);
      console.log(data.result);

      // apiからランダムで値を取得している
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return request;
    }
    fetchData();
  }, []);

  return {
    movie
  };
};
