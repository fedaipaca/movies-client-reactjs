import movies from "./data/movies.json";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieSearchResult from "./components/MovieSearchResult/MovieSearchResult";
import classes from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <MovieSearchResult movies={movies} />
      <Footer />
    </div>
  );
};

export default App;
