import { Movie } from "../../models/Movie.model";
import ArrangeMovies from "../ArrangeMovies/ArrangeMovies";

import MovieCardList from "../MovieCardList/MovieCardList";
import classes from "./MovieSearchResult.module.css";
import MovieSearchResultCount from "./MovieSearchResultCount";

interface MovieSearchResultProps {
  movies: Movie[];
}

const MovieSearchResult: React.FC<MovieSearchResultProps> = ({ movies }) => {
  return (
    <div className={classes.movies}>
      <ArrangeMovies />
      <MovieSearchResultCount count={movies.length} />
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieSearchResult;
