import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import LoadingPage from "../Main/LoadingPage";
import MovieCard from "../Models/MovieCard";

const Upcoming = () => {
  const genres = [
    "action",
    "adventure",
    "animation",
    "biography",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "film-noir",
    "history",
    "horror",
    "music",
    "musical",
    "mystery",
    "romance",
    "sci-fi",
    "short",
    "sport",
    "thriller",
    "war",
    "western",
  ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetching = async () => {
    try {
      const num = Math.floor(Math.random() * genres.length);
      const genre = genres[num];
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}`
      );
      if (response.status === 200) {
        const data = await response.json();
        if (data) {
          console.log(data);
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
      {Upcoming && (
        <div className="home">
          <div className="movies-list">
            <h2>Watch and shut the fuck up</h2>
            <div className="movies">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Upcoming;
