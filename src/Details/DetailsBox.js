import { motion } from "framer-motion";

const DetailsBox = ({
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
    <div>
      <motion.div
        layout
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          backgroundColor: "rgba(237, 233, 228, 0.8)",
          content: "center",
          padding: "0.8rem",
          margin: "5rem",
        }}
      >
        <motion.h2 classname="details-padding">Plot</motion.h2>

        <motion.div>{Plot}</motion.div>
      </motion.div>
    </div>
  );
};

export default DetailsBox;
