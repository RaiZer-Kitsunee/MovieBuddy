import { useEffect, useState } from "react";
import LoadingPage from "../Main/LoadingPage";
import MovieCard from "../Models/MovieCard";
import { pages, genres } from "../../Data/Lists";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("action");
  const [page, setPage] = useState("1");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/list_movies.json?genre=${genre}&limit=48&page=${page}`
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

    fetching();
  }, [genre, page]);

  return (
    <>
      {isLoading && <LoadingPage />}
      {movies && (
        <div className="home">
          <div className="movies-list">
            <div className="drop">
              <h2>Watch {genre} Movies </h2>
              <div className="drop-details">
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                <select value={page} onChange={(e) => setPage(e.target.value)}>
                  {pages.map((page) => (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
