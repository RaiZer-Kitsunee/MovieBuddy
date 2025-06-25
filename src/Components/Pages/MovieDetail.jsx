import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../Main/LoadingPage";

const MovieDetail = () => {
  const { id } = useParams(); // 🔑 get the movie id from URL
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [url, setUrl] = useState("");

  const fetching = async () => {
    try {
      const res = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const data = await res.json();
      if (data) {
        setMovie(data.data.movie);
        setUrl(data.data.movie.torrents[0].url);
        console.log(data.data.movie);
      }
    } catch (error) {
      throw new Error("error: " + error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <LoadingPage />}
      {movie && (
        <div className="home">
          <div className="movie-details">
            <div className="left-side">
              <img src={movie.large_cover_image} alt="poster" />
              <button>
                <a href={url} target="_blank" rel="noreferrer">
                  Download
                </a>
              </button>
            </div>
            <div className="right-side">
              <h2>{movie.title}</h2>

              <div className="holder">
                <p>Genres:</p>
                <div className="genres">
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <div className="genre" key={genre}>
                        {genre}
                      </div>
                    ))}
                </div>
              </div>

              <p>{movie.year}</p>

              <div className="holder">
                <p>torrent quality:</p>
                <div className="torrent-available">
                  {movie.torrents &&
                    movie.torrents.map((torrent) => (
                      <div className="torrent" key={torrent.url}>
                        <a href={torrent.url} target="_blank" rel="noreferrer">
                          {torrent.quality}.{torrent.type}
                        </a>
                      </div>
                    ))}
                </div>
              </div>

              <div className="holder">
                <p>Rating:</p>
                <p>
                  {movie.rating}
                  <span>/10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
