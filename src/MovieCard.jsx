import React from "react";
// import Details from "./Details";
// import { Route } from "react-router";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <div>
          <p>{Year}</p>
        </div>
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
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
      {/* <Route path={`/details/${this.imdbID}`}>
        <Details movie={this.movie} key={this.movie.imdbID} />
      </Route> */}
    </div>
  );
};

// use breedlist possible solution to details.js

export default MovieCard;
