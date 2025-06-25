import { useEffect, useState } from "react";
import LoadingPage from "../Main/LoadingPage";
import MovieCard from "../Models/MovieCard";
import genres from "../../Data/Lists";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [isLoading, setIsloading] = useState(true);

  const fetching = async () => {
    try {
      const num = Math.floor(Math.random() * genres.length);
      const genre = genres[num];
      setGenre(genre);
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=50`
      );
      if (response.status === 200) {
        const data = await response.json();
        if (data) {
          setMovies(data.data.movies);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      {isLoading && <LoadingPage />}
      {movies && (
        <div className="home">
          <div className="movies-list">
            <h2>Watch {genre} Movies </h2>
            <div className="movies">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Upcoming;
