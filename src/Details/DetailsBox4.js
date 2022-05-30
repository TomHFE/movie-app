import { motion } from "framer-motion";
import { useState } from "react";

const DetailsBox4 = ({
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
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setOpen(!open)}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          backgroundColor: "rgba(245, 3, 3, 0.8)",
          content: "center",
          padding: "0.8rem",
          margin: "1rem",
        }}
      >
        <motion.h2 layout="position" classname="details-padding">
          Rating
        </motion.h2>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div>
              {" "}
              <h3>Metascore:{Metascore}</h3>
              <h3>IMDB:{imdbRating}</h3>
              <h3>Awards: {Awards}</h3>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DetailsBox4;
