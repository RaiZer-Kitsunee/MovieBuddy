import useFetch from "../../Hooks/useFetch.js";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ErrorPage from "../Main/ErrorPage.jsx";
import LoadingPage from "../Main/LoadingPage.jsx";
import MovieCard from "../Models/MovieCard.jsx";
import TrendingCard from "../Models/Trendingcard.jsx";

const MainContent = () => {
  const [query, setQuery] = useState("");
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);

  const {
    data: Popular,
    isLoading,
    error,
  } = useFetch(
    "https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=8"
  );

  const { data: Regular, isLoadingR } = useFetch(
    `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&query_term=${encodeURIComponent(
      query
    )}&limit=48`
  );

  useEffect(() => {
    setTrending(Popular || []);
    setMovies(Regular || []);
  }, [Popular, Regular]);

  return (
    <>
      {isLoading && <LoadingPage />}
      {error && <ErrorPage message={error} />}
      {Popular && (
        <div className="home">
          {/* search bar */}
          <div className="search">
            <button>
              <IoSearchOutline />
            </button>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for movies..."
            />
          </div>

          {/* this is the trending section */}
          {!query && (
            <div className="trending">
              <h2>Trending </h2>
              <div className="trending-movies">
                {trending.map((movies) => (
                  <TrendingCard movies={movies} key={movies.id} />
                ))}
              </div>
            </div>
          )}

          {/* this is the movies list section */}
          {isLoadingR && <LoadingPage />}
          {Regular && (
            <div className="movies-list">
              {query ? (
                <div className="place-holder"></div>
              ) : (
                <h2>Recommended for you</h2>
              )}
              <div className="movies">
                {movies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MainContent;
