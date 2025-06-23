import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoBookmark } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdUpcoming } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import useFetch from "../Hooks/useFetch.js";

const Home = () => {
  const {
    data: hello,
    isLoading,
    error,
  } = useFetch("https://yts.mx/api/v2/list_movies.json");

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      releaseDate: "2010-07-16",
      poster: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      releaseDate: "2008-07-18",
      poster: "https://example.com/dark-knight.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Adventure",
      releaseDate: "2014-11-07",
      poster: "https://example.com/interstellar.jpg",
    },
    {
      id: 4,
      title: "The Matrix",
      genre: "Sci-Fi",
      releaseDate: "1999-03-31",
      poster: "https://example.com/matrix.jpg",
    },
    {
      id: 5,
      title: "Avatar",
      genre: "Fantasy",
      releaseDate: "2009-12-18",
      poster: "https://example.com/avatar.jpg",
    },
    {
      id: 6,
      title: "Titanic",
      genre: "Romance",
      releaseDate: "1997-12-19",
      poster: "https://example.com/titanic.jpg",
    },
    {
      id: 7,
      title: "The Shawshank Redemption",
      genre: "Drama",
      releaseDate: "1994-09-23",
      poster: "https://example.com/shawshank.jpg",
    },
    {
      id: 8,
      title: "Pulp Fiction",
      genre: "Crime",
      releaseDate: "1994-10-14",
      poster: "https://example.com/pulp-fiction.jpg",
    },
  ]);

  return (
    <>
      {/* this is the side bar on the left */}
      <div className="side-menu">
        <div className="logo">
          <img src="3d-movie.png" alt="movies boy" />
        </div>
        <button
          onClick={() => {
            console.log(hello[0].title);
          }}
        >
          <CgMenuGridR />
        </button>
        <button>
          <MdUpcoming />
        </button>
        <button>
          <IoBookmark />
        </button>
      </div>

      {/* this is the main content area */}
      <div className="home">
        {/* search bar */}
        <div className="search">
          <button>
            <IoSearchOutline />
          </button>
          <input type="text" placeholder="Search for movies..." />
        </div>

        {/* this is the trending section */}
        <div className="trending">
          <h2>Trending </h2>
          <div className="trending-movies">
            {movies.map((movies) => (
              <div className="trending-card">
                <img src={movies.poster} alt={movies.title} />
                <div className="trending-card-info">
                  <div className="trending-card-tile">
                    <p>{movies.releaseDate.slice(0, 4)} </p>
                    <MdLocalMovies />
                    <p>{movies.genre}</p>
                  </div>
                  <h3>{movies.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* this is the movies list section */}
        <div className="movies-list">
          <h2>Recommended for you</h2>
          <div className="movies">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <div className="movie-card-info">
                  <div className="movie-card-tile">
                    <p>{movie.releaseDate.slice(0, 4)} </p>
                    <MdLocalMovies />
                    <p>{movie.genre}</p>
                  </div>
                  <h3>{movie.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
