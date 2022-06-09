import * as React from "react";
import { ImageUrls } from "../../consts/urls";
import { useRandomMovie } from "../../hooks/useRandomMovie";
import styles from "./index.module.scss";

export const Banner = () => {
  const { movie } = useRandomMovie();

  function truncate(str: any, n: number) {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className={styles["banner"]}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${ImageUrls.Base}${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
      }}
    >
      <div className={styles["banner-contents"]}>
        <h1 className={styles["banner-title"]}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles["banner-buttons"]}>
          <button className={styles["banner-button"]}>Play</button>
          <button className={styles["banner-button"]}>My List</button>
        </div>

        <h1 className={styles["banner-description"]}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={styles["banner-fadeBottom"]} />
    </header>
  );
};
