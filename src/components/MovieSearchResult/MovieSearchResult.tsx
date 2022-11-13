import { Movie } from "../../models/Movie.model";
import Filter from "../Filter/Filter";

import MovieCardList from "../MovieCardList/MovieCardList";
import classes from "./MovieSearchResult.module.css";
import MovieSearchResultCount from "./MovieSearchResultCount";

interface MovieSearchResultProps {
  count: number;
  movies: Movie[];
}

const MovieSearchResult: React.FC<MovieSearchResultProps> = ({ count, movies }) => {
  return (
    <div className={classes.movies}>
      <Filter />
      <MovieSearchResultCount count={count} />
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieSearchResult;
