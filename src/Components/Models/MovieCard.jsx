import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
      <img
        src={movie.large_cover_image}
        alt={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "Placeholder.png";
        }}
      />
      <div className="movie-card-info">
        <div className="movie-card-tile">
          <p>{movie.year}</p>
          <MdLocalMovies />
          <p>{movie.genres[0]}</p>
        </div>
        <h3>{movie.title !== "" ? movie.title : "Unknown"}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
