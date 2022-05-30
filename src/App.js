import React from "react";
import "./App.css";
import Details from "./Details/Details";
import { BrowserRouter as Routes, Route, Switch, Link } from "react-router-dom";
import WrappedSearchMovies from "./SearchMovies";
import Home from "./Home";
// import SearchIcon from "./search.svg";

// 5d887735

const App = () => {
  return (
    <div>
      <Routes>
        <Link to="/">
          <header>
            <h1 className="title h1-main-header ">THELICK</h1>
          </header>
        </Link>
        <Switch>
          <Route path={`/details/:movieID`}>
            <Details />
          </Route>
          <Route path="/searchmovies">
            <WrappedSearchMovies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Routes>
    </div>
  );
};

export default App;
