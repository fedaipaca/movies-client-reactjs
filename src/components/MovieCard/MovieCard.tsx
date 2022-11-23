import { useState } from "react";
import { Movie } from "../../models/Movie.model";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import EditMovie from "../EditMovie/EditMovie";
import classes from "./MovieCard.module.css";

const MovieCard: React.FC<Movie> = ({ id, name, genre, year, poster }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={classes.card}>
      <div className={classes.cardMenu}>
        {!menuVisible && (
          <button className={classes.closeMenuButton} onClick={() => setMenuVisible(true)}>
            ...
          </button>
        )}
        {menuVisible && (
          <div className={classes.menuContainer}>
            <button onClick={() => setMenuVisible(false)}>Close</button>
            <EditMovie />
            <DeleteMovie />
          </div>
        )}
      </div>

      <img className={classes["card__img"]} src={poster} alt={name} />
      <div>
        <p className={classes["card__content"]}>
          <span className={classes["card__name"]}>{name}</span>
          <span className={classes["card__year"]}>{year}</span>
        </p>
        <p className={classes["card__genre"]}>{genre?.join(" & ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
