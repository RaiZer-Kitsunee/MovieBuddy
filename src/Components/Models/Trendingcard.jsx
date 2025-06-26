import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const TrendingCard = ({ movies }) => {
  return (
    <Link to={`/movie/${movies.id}`} className="trending-card" key={movies.id}>
      <img
        src={movies.background_image_original}
        alt={movies.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "Placeholder.png";
        }}
      />
      <div className="trending-card-info">
        <div className="trending-card-tile">
          <p>{movies.year} </p>
          <MdLocalMovies />
          <p>{movies.genres[0]}</p>
        </div>
        <h3>{movies.title}</h3>
      </div>
    </Link>
  );
};

export default TrendingCard;
