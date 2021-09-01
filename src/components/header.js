import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
		 <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div class="container">
              <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span/>
                <span/>
                <span/>
              </button>
              <a class="navbar-brand text-brand" href="#"><span class="color-purple">Music</span><span class="color-b">Brainz</span></a>

              <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                <ul class="navbar-nav">

                  <li class="nav-item">
                    <a class="nav-link active">About</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link ">Docs</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link ">API</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link ">Blog</a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Username</a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item ">Profile</a>
                      <a class="dropdown-item ">Applications</a>
                      <a class="dropdown-item ">Subscriptions</a>
                      <a class="dropdown-item ">Logout</a>
                    </div>
                  </li>

                </ul>
              </div>

              <button type="button" class="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                <i class="bi bi-search"/>
              </button>

            </div>
          </nav>
         )
    }
}
export default Header;