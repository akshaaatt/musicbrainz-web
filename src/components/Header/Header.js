import React from "react";
import "./Header.css";
import "../App.css";
import ThemeSwitchButton from "../ThemeSwitchButton/ThemeSwitchButton";
import SearchOverlay from "./SearchOverlay";

function Header(props) {
  let headerBg, searchBackground;
  if (props.isDarkThemeActive) {
    headerBg = "navbar navbar-default navbar-trans navbar-expand-lg fixed-top navbar-ok";
    searchBackground = "navbar-ok";
  }
  else {
    headerBg = "navbar navbar-default navbar-trans navbar-expand-lg fixed-top";
    searchBackground = "";
  }

  return (
      <>
      <SearchOverlay isDarkThemeActive={props.isDarkThemeActive}/>
      <nav className={headerBg}>
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span/>
            <span/>
            <span/>
          </button>
          <a className="navbar-brand text-brand" href="#"><span className="color-purple">Music</span><span className="color-orange">Brainz</span></a>

          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <ThemeSwitchButton
                  dark={props.isDarkThemeActive}
                  changeTheme={props.switchActiveTheme}
              />
              <li className="nav-item">
                <a href="https://musicbrainz.org/doc/About" target="_blank" className="nav-link">About</a>
              </li>

              <li className="nav-item">
                <a href="https://musicbrainz.org/doc/MusicBrainz_Documentation" target="_blank" className="nav-link ">Docs</a>
              </li>

              <li className="nav-item">
                <a href="https://musicbrainz.org/doc/MusicBrainz_API" target="_blank" className="nav-link ">API</a>
              </li>

              <li className="nav-item">
                <a href="https://blog.metabrainz.org" target="_blank" className="nav-link ">Blog</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Username</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item ">Profile</a>
                  <a className="dropdown-item ">Applications</a>
                  <a className="dropdown-item ">Subscriptions</a>
                  <a className="dropdown-item ">Logout</a>
                </div>
              </li>
            </ul>

          </div>
          <div className="d-none d-md-block general-margins">
            <input type="text" name="query" className={"form-control "+ searchBackground} placeholder="Search"/>
          </div>

          <div className="d-none d-md-block general-margins">
            <select id="type-selector" name="type" className={"form-control "+ searchBackground}>
              <option>Artist</option>
              <option>Release</option>
              <option>Recording</option>
              <option>Label</option>
              <option>Work</option>
              <option>Release Group</option>
              <option>Area</option>
              <option>Place</option>
              <option>Annotation</option>
              <option>CD Stud</option>
              <option>Editor</option>
              <option>Tag</option>
              <option>Instrument</option>
              <option>Series</option>
              <option>Event</option>
              <option>Documentation</option>

            </select>
          </div>
          <button type="button" onClick={attach} className="btn btn-b-n">
            <i className="bi bi-search"/>
          </button>

        </div>
      </nav>
      </>
  )
}

const attach = e => {
  e.preventDefault()
  document.body.classList.add('box-collapse-open')
  document.body.classList.remove('box-collapse-closed')
}

export default Header;