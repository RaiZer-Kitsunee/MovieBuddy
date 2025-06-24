import { CgMenuGridR } from "react-icons/cg";
import { IoBookmark } from "react-icons/io5";
import { MdUpcoming } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-menu">
      <div className="logo">
        <img src="3d-movie.png" alt="movies boy" />
      </div>
      <Link to={"/"} className="link-button">
        <CgMenuGridR />
      </Link>
      <Link to={"/upcoming"} className="link-button">
        <MdUpcoming />
      </Link>
      <Link to={"/bookmarks"} className="link-button">
        <IoBookmark />
      </Link>
    </div>
  );
};

export default SideBar;
