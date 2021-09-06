import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <>
        <div className="box-collapse">
          <div className="title-box-d">
            <h3 className="title-d">Search</h3>
          </div>
          <span className="close-box-collapse right-boxed bi bi-x" onClick={remove}/>
          <div className="box-collapse-wrap form">
            <form className="form-a">
              <div className="row">
                <div className="col-md-12 mb-2">
                  <div className="form-group">
                    <label className="pb-2" htmlFor="Type">Keywords</label>
                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Query"/>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group mt-3">
                    <label className="pb-2" htmlFor="Type">Type</label>
                    <select className="form-control form-select form-control-a" id="Type">
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
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group mt-3">
                    <label className="pb-2" htmlFor="results">Result per Page</label>
                    <select className="form-control form-select form-control-a" id="results">
                      <option>Upto 25</option>
                      <option>Upto 50</option>
                      <option>Upto 100</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group mt-3">
                    <label className="pb-2" htmlFor="method">Method</label>
                    <select className="form-control form-select form-control-a" id="method">
                      <option>Indexed Search</option>
                      <option>Indexed Search with advanced query syntax</option>
                      <option>Direct database search</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-b">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span/>
            <span/>
            </button>
            <a className="navbar-brand text-brand" href="#"><span className="color-purple">Music</span><span className="color-b">Brainz</span></a>

            <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <a className="nav-link active">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link ">Docs</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link ">API</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link ">Blog</a>
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

            <button type="button" onClick={attach} className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
              <i className="bi bi-search"/>
            </button>

          </div>
        </nav>
        </>
    )
  }
}

function attach(e) {
  e.preventDefault()
  document.body.classList.add('box-collapse-open')
  document.body.classList.remove('box-collapse-closed')
}
function remove(e) {
  e.preventDefault()
  document.body.classList.remove('box-collapse-open')
  document.body.classList.add('box-collapse-closed')
}

export default Header;