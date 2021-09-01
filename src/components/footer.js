import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <React.Fragment>
		  <section class="section-footer">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-4">
                  <div class="widget-a">
                    <div class="w-header-a">
                      <h3 class="w-title-a text-brand">MusicBrainz</h3>
                    </div>
                    <div class="w-body-a">
                      <p class="w-text-a color-text-a">

                        MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.

                      </p>
                    </div>
                    <div class="w-footer-a">
                      <ul class="list-unstyled">
                        <li class="color-a">
                          <span class="color-text-a">IRC .</span> #metabrainz , #musicbrainz
                        </li>
                        <li class="color-a">
                          <span class="color-text-a">Email .</span> support@metabrainz.org
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 section-md-t3">
                  <div class="widget-a">
                    <div class="w-header-a">
                      <h3 class="w-title-a text-brand">Useful Links</h3>
                    </div>
                    <div class="w-body-a">
                      <div class="w-body-a">
                        <ul class="list-unstyled">
                          <li class="item-list-a">
                            <i class="bi bi-chevron-right"></i> <a href="https://metabrainz.org/donate" target="_blank">Donate</a>
                          </li>
                          <li class="item-list-a">
                            <i class="bi bi-chevron-right"></i> <a href="https://wiki.musicbrainz.org/Main_Page" target="_blank">Wiki</a>
                          </li>
                          <li class="item-list-a">
                            <i class="bi bi-chevron-right"></i> <a href="https://community.metabrainz.org/" target="_blank">Community</a>
                          </li>
                          <li class="item-list-a">
                            <i class="bi bi-chevron-right"></i> <a href="https://blog.metabrainz.org/" target="_blank">Blog</a>
                          </li>
                          <li class="item-list-a">
                            <i class="bi bi-chevron-right"></i> <a href="https://metabrainz.org/" target="_blank">MetaBrainz</a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4 section-md-t3">
                  <div class="widget-a">
                    <div class="w-header-a">
                      <h3 class="w-title-a text-brand">Explore Us</h3>
                    </div>
                    <div class="w-body-a">
                      <ul class="list-unstyled">
                        <li class="item-list-a">
                          <i class="bi bi-chevron-right"></i> <a href="https://listenbrainz.org/" target="_blank">ListenBrainz</a>
                        </li>
                        <li class="item-list-a">
                          <i class="bi bi-chevron-right"></i> <a href="https://critiquebrainz.org/" target="_blank">CritiqueBrainz</a>
                        </li>
                        <li class="item-list-a">
                          <i class="bi bi-chevron-right"></i> <a href="https://picard.musicbrainz.org/" target="_blank">Picard</a>
                        </li>
                        <li class="item-list-a">
                          <i class="bi bi-chevron-right"></i> <a href="https://bookbrainz.org/" target="_blank">BookBrainz</a>
                        </li>
                        <li class="item-list-a">
                          <i class="bi bi-chevron-right"></i> <a href="https://acousticbrainz.org/" target="_blank">AcousticBrainz</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <nav class="nav-footer">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="#">About</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Docs</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">API</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Blog</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div class="socials-a">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="https://www.facebook.com/MusicBrainz-12390437194/">
                          <i class="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://twitter.com/MusicBrainz">
                          <i class="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="https://www.instagram.com/metabrainz/">
                          <i class="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                      </li>

                    </ul>
                  </div>
                  <div class="copyright-footer">
                    <p class="copyright color-text-a">
                      Brought to you by <span class="color-a"> MetaBrainz Foundation </span>

                    </p>
                  </div>

                </div>
              </div>
            </div>
          </footer>
          </React.Fragment>
)
    }
}
export default Footer;