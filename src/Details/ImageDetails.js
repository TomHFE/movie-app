import { motion } from "framer-motion";

const ImageDetails = ({
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
    <motion.div>
      <motion.img
        style={{
          borderRadius: "1rem",
          boxShadow: "0px,10px,30px rgba: 0,0,0,0.5",
          margin: "4rem",
        }}
        src={
          Poster !== "N/A"
            ? Poster
            : "https://www.gannett-cdn.com/-mm-/fbb0fd635bac41c985b489468a420232399711df/c=46-0-546-666/local/-/media/2017/01/18/USATODAY/USATODAY/636203499834803396-emojimovie-dom-firstLook-working004-rev-rgb.jpg"
        }
        alt={Title}
      />
    </motion.div>
  );
};

export default ImageDetails;
