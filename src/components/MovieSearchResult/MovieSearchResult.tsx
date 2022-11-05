import { Movie } from "../../models/Movie.model";
import Filter from "../Filter/Filter";

import MovieCardList from "../MovieCardList/MovieCardList";
import classes from "./MovieSearchResult.module.css";

interface MovieSearchResult {
  count: number;
  movies: Movie[];
}

const MovieSearchResult: React.FC<MovieSearchResult> = ({ count, movies }) => {
  return (
    <div className={classes.movies}>
      <Filter />
      <p>
        <span>{count}</span> movies found
      </p>
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieSearchResult;
