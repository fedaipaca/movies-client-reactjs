import { useMovies } from "../../store";
import AddMovie from "../AddMovie/AddMovie";
import Brand from "../Logo/Logo";
import MovieDetail from "../MovieDetail/MovieDetail";
import SearchMovie from "../SearchMovie/SearchMovie";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  const { selectedMovie, onSelectMovie } = useMovies();
  return (
    <div className={classes.header}>
      <div className={classes["header-bg"]}>
        <div className={classes["header-bg__overlay"]}></div>
      </div>
      <div className={classes["header__nav"]}>
        <Brand />
        {selectedMovie ? <button onClick={() => onSelectMovie("")}>Search</button> : <AddMovie />}
      </div>
      <div className={classes["header__content"]}>
        {selectedMovie ? (
          <MovieDetail
            id={selectedMovie.id}
            name={selectedMovie.name}
            genres={selectedMovie.genres}
            year={selectedMovie.year}
            poster={selectedMovie.poster}
            runtime={selectedMovie.runtime}
            description={selectedMovie.description}
          />
        ) : (
          <>
            <h2 className={classes["header__title"]}>Find your movie</h2>
            <SearchMovie />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
