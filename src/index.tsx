import * as React from "react";
import { render } from "react-dom";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { Row } from "./components/Row";
import { ImageUrls } from "./consts/urls";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGUINALS"
          fetchUrl={ImageUrls.NetflixOriginals}
          isLargeRow
        />
        <Row title="Top Rated" fetchUrl={ImageUrls.TopRated} />
        <Row
          title="Action Movies"
          fetchUrl={ImageUrls.ActionMovies}
          isLargeRow
        />
        <Row title="Comedy Movies" fetchUrl={ImageUrls.ComedyMovies} />
        <Row title="Horror Movies" fetchUrl={ImageUrls.HorrorMovies} />
        <Row title="Romance Movies" fetchUrl={ImageUrls.RomanceMovies} />
        <Row title="DOcumentaries" fetchUrl={ImageUrls.DocumentMovies} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
