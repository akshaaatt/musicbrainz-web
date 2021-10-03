import React from "react";
import './Footer.css';
import '../App.css';

const Footer = props => {
  let footerBg, sectionBg;
  if (props.isDarkThemeActive) {
    sectionBg = "navbar-ok section-footer-utils";
    footerBg = "navbar-ok";
  } else {
    sectionBg = "section-footer section-footer-utils";
    footerBg = "";
  }

  return (
      <>
        <section className={sectionBg}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="navbar-brand text-brand"><img src="assets/img/meb-icons/MusicBrainz.svg" width="52" height="52" alt="image"/> <span className="color-purple">Music</span><span
                        className="color-orange">Brainz</span></h3>
                  </div>
                  <br/>
                  <div className="w-body-a">
                    <p className="w-text-a color-gray">
                      is an open music encyclopedia that collects music metadata and makes it available to the public.
                    </p>
                  </div>
                  <div className="w-footer-a">
                    <ul className="list-unstyled">
                      <li className="color-a">
                        <span className="color-gray">Development IRC: </span> <a href="https://kiwiirc.com/nextclient/irc.libera.chat/?#metabrainz" target="_blank"> #metabrainz</a>
                      </li>
                      <li className="color-a">
                        <span className="color-gray">Discussion IRC: </span> <a href="https://kiwiirc.com/nextclient/irc.libera.chat/?#metabrainz" target="_blank"> #musicbrainz</a>
                      </li>
                      <li className="color-a" >
                        <span className="color-gray">Email: </span> <a href="mailto:support@metabrainz.org">support@metabrainz.org </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-sm-12 col-md-3 section-md-t3">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">Useful Links</h3>
                  </div>
                  <div className="w-body-a">
                    <div className="w-body-a">
                      <ul className="list-unstyled">
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://metabrainz.org/donate" target="_blank">Donate</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://wiki.musicbrainz.org/Main_Page" target="_blank">Wiki</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://community.metabrainz.org/" target="_blank">Community</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://blog.metabrainz.org/" target="_blank">Blog</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://www.redbubble.com/people/metabrainz/shop" target="_blank">Shop</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://metabrainz.org/" target="_blank">MetaBrainz</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 section-md-t3">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">Explore Us</h3>
                  </div>
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <img src="assets/img/meb-icons/ListenBrainz.svg" width="24" height="24" alt="image"/> <a href="https://listenbrainz.org/" target="_blank">ListenBrainz</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <img src="assets/img/meb-icons/CritiqueBrainz.svg" width="24" height="24" alt="image"/> <a href="https://critiquebrainz.org/" target="_blank">CritiqueBrainz</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <img src="assets/img/meb-icons/Picard.svg" width="24" height="24" alt="image"/> <a href="https://picard.musicbrainz.org/" target="_blank">Picard</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <img src="assets/img/meb-icons/BookBrainz.svg" width="24" height="24" alt="image"/> <a href="https://bookbrainz.org/" target="_blank">BookBrainz</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <img src="assets/img/meb-icons/AcousticBrainz.svg" width="24" height="24" alt="image"/> <a href="https://acousticbrainz.org/" target="_blank">AcousticBrainz</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <img src="assets/img/meb-icons/CoverArtArchive.svg" width="24" height="24" alt="image"/> <a href="https://coverartarchive.org" target="_blank">Cover Art Archive</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-2 section-md-t3">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">Join Us</h3>
                  </div>
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <a href="https://musicbrainz.org/doc/Beginners_Guide" target="_blank">Beginner's Guide</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <a href="https://musicbrainz.org/doc/Style" target="_blank">Style Guidelines</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <a href="https://musicbrainz.org/doc/How_To" target="_blank">How Tos</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <a href="https://musicbrainz.org/doc/Frequently_Asked_Questions" target="_blank">FAQs</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <a href="https://musicbrainz.org/doc/MusicBrainz_Documentation" target="_blank">Doc Index</a>
                      </li>
                      <li className="item-list-a">
                        <i className="bi bi-chevron-right"/> <a href="https://musicbrainz.org/doc/Development" target="_blank">Development</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={footerBg}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 d-none d-md-block">
                <div className="copyright-footer">
                  <p className="copyright color-gray">
                    OSS Geek?  <a href="https://github.com/metabrainz/musicbrainz-server" target="_blank"> <span className="color-a"> Contribute Here </span> </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-footer">
                  <p className="copyright color-gray">
                    Brought to you by <img src="assets/img/meb-icons/MetaBrainz.svg" width="30" height="30" alt="image"/> <span className="color-a"> MetaBrainz Foundation </span>
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <div className="copyright-footer">
                  <p className="copyright color-gray">
                    Found an Issue?  <a href="https://tickets.metabrainz.org/" target="_blank"> <span className="color-a"> Report Here </span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
  )
}
export default Footer;