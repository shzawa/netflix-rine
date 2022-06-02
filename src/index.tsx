import * as React from "react";
import { render } from "react-dom";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { Row } from "./components/Row";
import { Urls } from "./consts/urls";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGUINALS"
          fetchUrl={Urls.NetflixOriginals}
          isLargeRow
        />
        <Row title="Top Rated" fetchUrl={Urls.TopRated} />
        <Row title="Action Movies" fetchUrl={Urls.ActionMovies} isLargeRow />
        <Row title="Comedy Movies" fetchUrl={Urls.ComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Urls.HorrorMovies} />
        <Row title="Romance Movies" fetchUrl={Urls.RomanceMovies} />
        <Row title="DOcumentaries" fetchUrl={Urls.DocumentMovies} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
