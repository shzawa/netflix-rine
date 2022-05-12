import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export const Nav = () => {
  const [isNavBlack, setNavBlack] = useState(false);

  useEffect(() => {
    const handleChangeColor = () => {
      if (window.scrollY > 100) {
        setNavBlack(true);
      } else {
        setNavBlack(false);
      }
    };

    window.addEventListener("scroll", handleChangeColor);
    return () => {
      window.removeEventListener("scroll", handleChangeColor);
    };
  }, []);

  return (
    <div
      className={[styles["nav"], isNavBlack && styles["nav-black"]].join(" ")}
    >
      <img
        className={styles["nav-logo"]}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className={styles["nav-avater"]}
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};
