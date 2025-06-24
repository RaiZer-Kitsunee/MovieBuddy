import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
      <img src={movie.large_cover_image} alt={movie.title} />
      <div className="movie-card-info">
        <div className="movie-card-tile">
          <p>{movie.year} </p>
          <MdLocalMovies />
          <p>{movie.genres[0]}</p>
        </div>
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
