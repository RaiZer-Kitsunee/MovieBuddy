import { Route, Routes } from "react-router-dom";
import MainContent from "./Components/Pages/Main";
import Upcoming from "./Components/Pages/Upcoming";
import BookMarks from "./Components/Pages/BookMarks";
import MovieDetail from "./Components/Pages/MovieDetail";
import SideBar from "./Components/Main/SideBar"

function App() {
  return (
    <div className="App">
      <div className="content">
      {/* this is the side bar on the left */}
      <SideBar/>

      {/* this is the main content area */}
      <Routes>
        <Route path="/" Component={MainContent} />
        <Route path="/upcoming" Component={Upcoming} />
        <Route path="/bookmarks" Component={BookMarks} />
        <Route path="/movie/:id" element={MovieDetail} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
