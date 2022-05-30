import { motion } from "framer-motion";
import { useState } from "react";

const DetailsBox3 = ({
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
          backgroundColor: "rgba(210, 23, 23, 0.8)",
          content: "center",
          padding: "0.8rem",
          margin: "1rem",
        }}
      >
        <motion.h2 layout="position" classname="details-padding">
          Talent
        </motion.h2>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div>
              <h3>Type: {Type}</h3>
              <h3>Director: {Director}</h3>
              <h3>Writer: {Writer}</h3>
              <h3>Actors: {Actors}</h3>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DetailsBox3;
