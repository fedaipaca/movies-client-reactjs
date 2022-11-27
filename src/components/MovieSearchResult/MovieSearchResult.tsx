import { Movie } from "../../models/Movie.model";
import Filter from "../Filter/Filter";

import MovieCardList from "../MovieCardList/MovieCardList";
import classes from "./MovieSearchResult.module.css";
import MovieSearchResultCount from "./MovieSearchResultCount";

interface MovieSearchResultProps {
  movies: Movie[];
}

const MovieSearchResult: React.FC<MovieSearchResultProps> = ({ movies }) => {
  return (
    <div className={classes.movies}>
      <Filter />
      <MovieSearchResultCount count={movies.length} />
      <MovieCardList movies={movies} />
    </div>
  );
};

export default MovieSearchResult;
