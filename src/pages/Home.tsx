import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieSearchResult from "../components/MovieSearchResult/MovieSearchResult";
import { movies } from "../data/movies";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <MovieSearchResult count={39} movies={movies} />
      <Footer />
    </div>
  );
};

export default Home;
