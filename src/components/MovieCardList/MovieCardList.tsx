import { Movie } from "../../types/movieTypes";
import MovieCard from "../MovieCard/MovieCard";
import classes from "./MovieCardList.module.css";

interface MovieCardListProps {
  movies: Movie[];
}

const MovieCardList: React.FC<MovieCardListProps> = ({ movies }) => {
  return (
    <div className={classes.list}>
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          name={movie.name}
          genres={movie.genres}
          year={movie.year}
          poster={movie.poster}
          runtime={movie.runtime}
          description={movie.description}
        />
      ))}
    </div>
  );
};

export default MovieCardList;
