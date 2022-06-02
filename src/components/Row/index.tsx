import React, { useState } from "react";
import YouTube from "react-youtube";
import { Urls } from "../../consts/urls";
import { useMovies } from "../../hooks/useMovies";
import { apiClient } from "../../libs/api";
import { Movie } from "../../models/movie";
import styles from "./index.module.scss";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow }) => {
  const { movies } = useMovies(fetchUrl);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await apiClient.get(
        `/movie/${movie.id}/videos?api_key=~~~` // FIXME: api_key
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

  return (
    <div className={styles["row"]}>
      <h2>{title}</h2>
      <div className={styles["row-posters"]}>
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={[
              styles["row-posters"],
              `${isLargeRow && styles["row-poster-large"]}`
            ].join(" ")}
            src={`${Urls.Base}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
