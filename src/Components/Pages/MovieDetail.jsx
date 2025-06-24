import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import LoadingPage from "../Main/LoadingPage";

const MovieDetail = () => {
  const { id } = useParams(); // 🔑 get the movie id from URL
  const [movie, setMovie] = useState([]);

  const { data: movieDetails, isLoading } = useFetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );

  useEffect(() => {
    setMovie(movieDetails);
  }, [movieDetails]);

  return (
    <div className="home"><h2>hello</h2></div>
  );
};

export default MovieDetail;
