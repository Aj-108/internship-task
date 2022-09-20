import React from "react";
import "./Navbar.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AvatarImage from "../assests/avatarPic.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid my-3 ">
          <button type="button" className="logo__button mx-lg-5 mx-md-3">
            Logo
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <SearchBar className="searchBar" />
            <span className="navbar-brand mb-0 nav__text mx-auto">
              Search Project
            </span>
            <div className="rightTray mx-auto">
                <ChatBubbleOutlineIcon className="nav__messageIcon mx-md-2 mx-lg-3" />
                <FavoriteBorderIcon className="nav__heartIcon mx-md-2 mx-lg-3" />
              <img
                src={AvatarImage}
                alt="avatar image"
                className="avatar__image mx-md-1 mx-lg-2"
              />
              <ExpandMoreIcon className="expandIcon mx-1 " />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

//  TODO change toggler color
// TODO add small number over icons
