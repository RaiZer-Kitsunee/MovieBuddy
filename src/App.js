import { CgMenuGridR } from "react-icons/cg";
import { IoBookmark } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdUpcoming } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="content">
        {/* this is the side bar on the left */}
        <div className="side-menu">
            <div className="logo"><img src="3d-movie.png" alt="movies boy" /></div>
            <button><CgMenuGridR/></button>
            <button><MdUpcoming/></button>
            <button><IoBookmark/></button>
        </div>

        {/* this is the main content area */}
        <div className="home">
          {/* search bar */}
          <div className="search">
            <button><IoSearchOutline/></button>
            <input type="text" placeholder="Search for movies..." />
          </div>

          {/* this is the trending section */}
          <div className="trending">
            <h2>Trending </h2>
            <div className="trending-movies">
              <div className="trending-card"></div>
              <div className="trending-card"></div>
              <div className="trending-card"></div>
              <div className="trending-card"></div>
              <div className="trending-card"></div>
              <div className="trending-card"></div>
              <div className="trending-card"></div>
              <div className="trending-card"></div>
            </div>
          </div>

          {/* this is the movies list section */}
          <div className="movies-list">
            <h2>Recommended for you</h2>
            <div className="movies">
              <div className="movie-card"></div>
              <div className="movie-card"></div>
              <div className="movie-card"></div>
              <div className="movie-card"></div>
              <div className="movie-card"></div>
              <div className="movie-card"></div>
              <div className="movie-card"></div>
              <div className="movie-card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
