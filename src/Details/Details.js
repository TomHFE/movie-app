// // import { useEffect, useState } from "react";
// import React from "react";
// import { useEffect } from "react";

// // const Details = (props) => {
// //   const { imdbID, Year, Poster, Title, Type } = props;

// //   // useEffect(() => {
// //   //   Details("");
// //   // }, []);

// //   // const Details = async (title) => {
// //   //   const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5d887735&s=${title}`);
// //   //   const data = await res.json();

// //   return (
// //     <div key={imdbID}>
// //       <h1>{Title}</h1>
// //       <h1>hello</h1>
// //       <h2>
// //         {Type} {Year} {Poster}
// //       </h2>
// //     </div>
// //   );
// // };

// // // export default Details;
// // const Details = () => {

// //  const [ID, setID] = useState("");

// //  useEffect(() => {
// //   DetailsMap("");
// //  }, []);

// //  const DetailsMap = async (id) => {
// //   const res = await fetch(`http://www.omdbapi.com/?i=${id}`);
// //   const data = await res.json();

// //   setID(data.imdbID);
// //   // setID(data.imdbID);
// //   console.log(data.Search);
// //   movies.map((movies) => console.log(movies.imdbID));
// // };

// // return (

// // );
// // export default Details;
// // import { Component } from "react";
// // import { withRouter } from "react-router-dom";

// // class Details extends Component {
// //   constructor() {
// //     super();

// //     this.state = { loading: true };
// //   }
// //   async componentDidMount() {
// //     const res = await fetch(
// //       `http://www.omdbapi.com/?i=${this.props.match.params.imdbID}`
// //     );
// //     const json = await res.json();
// //     this.setState(
// //       Object.assign(
// //         {
// //           loading: false,
// //         },
// //         json.Search
// //       )
// //     );
// //   }
// //   render() {
// //     const { imdbID, Year, Poster, Title, Type } = this.state;
// //     console.log(this.state);

// //     return (
// //       <div>
// //         <h1>{Title}</h1>
// //         <img src={Poster} alt={imdbID} />
// //         <p>{`${Year}-${Type}`}</p>
// //       </div>
// //     );
// //   }
// // }
// // export default withRouter(Details);
// const Details = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <div>
//           <p>{Year}</p>
//         </div>
//         <div>
//           <img
//             src={
//               Poster !== "N/A"
//                 ? Poster
//                 : "https://www.gannett-cdn.com/-mm-/fbb0fd635bac41c985b489468a420232399711df/c=46-0-546-666/local/-/media/2017/01/18/USATODAY/USATODAY/636203499834803396-emojimovie-dom-firstLook-working004-rev-rgb.jpg"
//             }
//             alt={Title}
//           />
//         </div>
//         <div>
//           <span>{Type}</span>
//           <h3>{Title}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";

// const Details = () => {
//   const [ID, setID] = useState("");
//   const [details, setDetails] = useState("");

//   useEffect(() => {
//     Detailparams("");
//   }, []);

//   const Detailparams = async () => {
//     const res = await fetch(`http://www.omdbapi.com/?i=${ID}&apikey=5d887735`);
//     const data = await res.json();

//     setDetails(data.Search);
//     // setID(data.imdbID);
//     console.log(data.Search);
//     // movies.map((movies) => setIDS(movies.imdbID));
//   };

// const Details = ({ details: { imdbID, Year, Poster, Title, Type } }) => {
//   // setID(this.imdbID);
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <p>{imdbID}</p>
//       </div>
//     </div>
//   );
// // };

// import { useEffect, useState } from "react";

// // http://www.omdbapi.com/?apikey=5d887735&i=tt3896198&plot=full

// const Details = () => {
//   const [information, setinformation] = useState([]);

//   useEffect(() => {
//     requestDetails(ID);

//     async function requestDetails(ID) {
//       const res = await fetch(
//         `http://www.omdbapi.com/?apikey=5d887735&i=${ID}&plot=full`
//       );
//       const data = await res.json();
//       setinformation(data.search);
//       console.log(information);
//     }
//   }, [ID]);
// };

// export default Details;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsBox from "./DetailsBox";
import DetailsBox2 from "./DetailsBox2";
import DetailsBox3 from "./DetailsBox3";
import DetailsBox4 from "./DetailsBox4";
import { motion } from "framer-motion";
import Title from "./Title";
import ImageDetails from "./ImageDetails";

const Details = () => {
  const [information, setinformation] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    requestDetails(movieID);
  }, []);

  const requestDetails = async (movieID) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=5d887735&i=${movieID}&plot=full`
    );
    const data = await res.json();
    setinformation([data]);
    console.log(information);
    console.log(movieID);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="Details">
      {information.map((movie) => (
        <>
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Title movie={movie} value={movie.imdbID} key={movie.imdbID} />
            <motion.div>
              <div className="details-main-section">
                <ImageDetails
                  movie={movie}
                  value={movie.imdbID}
                  key={movie.imdbID}
                />
                <div className="details-box">
                  <DetailsBox
                    movie={movie}
                    value={movie.imdbID}
                    key={movie.imdbID}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div style={{}}>
              <DetailsBox2
                movie={movie}
                value={movie.imdbID}
                key={movie.imdbID}
              />
              <DetailsBox3
                movie={movie}
                value={movie.imdbID}
                key={movie.imdbID}
              />
              <DetailsBox4
                movie={movie}
                value={movie.imdbID}
                key={movie.imdbID}
              />
            </motion.div>
          </motion.div>
        </>
      ))}
    </div>
  );
};
// add the details boxes to here in each box add the spread out props from the api

export default Details;
