import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import DetailsBox from "./DetailsBox";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const DetailsCard = ({
  movie: {
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Production,
    Rated,
    Ratings,
    Released,
    Response,
    Runtime,
    Title,
    Type,
    Website,
    Writer,
    Year,
    imdbID,
    imdbRating,
    imdbVotes,
  },
}) => {
  const [shown, setShown] = useState(true);
  const [plot, setPlot] = useState("");

  if (plot === true) {
    setPlot({ Plot });
  } else {
    setPlot("N/A");
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  onclick = () => {
    setShown(!shown);
  };

  return (
    <div
      key={imdbID}
      className="Details"
      onBlur={(e) => {
        e.preventDefault();
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <div className="details2">
          <h1 className="details-title">{Title}</h1>
        </div>
        <div className="details-main-section">
          <Routes>
            <Route path={`/details/:movieID`}>
              <DetailsBox Plot={plot} />
            </Route>
          </Routes>
          <div>
            <img
              src={
                Poster !== "N/A"
                  ? Poster
                  : "https://www.gannett-cdn.com/-mm-/fbb0fd635bac41c985b489468a420232399711df/c=46-0-546-666/local/-/media/2017/01/18/USATODAY/USATODAY/636203499834803396-emojimovie-dom-firstLook-working004-rev-rgb.jpg"
              }
              alt={Title}
            />
          </div>
        </div>
        <div className="details-second-section">
          <div>
            <p>{Released}</p>
            <p>{Runtime}</p>
          </div>
          <div>
            <h3>Type: {Type}</h3>
            <h3>Director: {Director}</h3>
            <h3>Writer: {Writer}</h3>
            <h3>Actors: {Actors}</h3>
          </div>
          <div>
            <h3>Metascore:{Metascore}</h3>
            <h3>IMDB:{imdbRating}</h3>
            <h3>Awards: {Awards}</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailsCard;
