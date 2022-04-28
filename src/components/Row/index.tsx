import React from "react";
import { Urls } from "../../consts/urls";
import { useMovies } from "../../hooks/useMovies";
import styles from "./index.module.scss";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow }) => {
  const { movies } = useMovies(fetchUrl);

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
          />
        ))}
      </div>
    </div>
  );
};
