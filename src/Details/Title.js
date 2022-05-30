const Title = ({
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
  return (
    <div className="details2">
      <div className="details-title">{Title}</div>
    </div>
  );
};

export default Title;
