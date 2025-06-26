import { CgMenuGridR } from "react-icons/cg";
import { IoBookmark } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { RiMovie2AiFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-menu">
      <div className="logo">
        <RiMovie2AiFill />
      </div>
      <Link to={"/"} className="link-button">
        <CgMenuGridR />
      </Link>
      <Link to={"/upcoming"} className="link-button">
        <MdLocalMovies />
      </Link>
      <Link to={"/bookmarks"} className="link-button">
        <IoBookmark />
      </Link>
    </div>
  );
};

export default SideBar;
