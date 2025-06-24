import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const Test = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://yts.mx/api/v2/list_movies.json?limit=5"
        );
        const json = await res.json();

        // 🔑 Access the array of movies
        const movieList = json.data.movies;
        setMovies(movieList || []);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>
            {movie.title} ({movie.year})
          </h3>
          <img src={movie.medium_cover_image} alt={movie.title} width="150" />
          <p>{movie.summary}</p>
          <ul>
            {movie.torrents.map((torrent, i) => (
              <li key={i}>
                {torrent.quality} -{" "}
                <a href={torrent.url} target="_blank">
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Test;
