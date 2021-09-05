import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <>
		  <section className="section-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="navbar-brand text-brand"><span className="color-purple">Music</span><span
                          className="color-b">Brainz</span></h3>
                    </div>
                    <br/>
                    <div className="w-body-a">
                      <p className="w-text-a color-text-a">

                        is an open music encyclopedia that collects music metadata and makes it available to the public.

                      </p>
                    </div>
                    <div className="w-footer-a">
                      <ul className="list-unstyled">
                        <li className="color-a">
                          <span className="color-text-a">IRC .</span> #metabrainz , #musicbrainz
                        </li>
                        <li className="color-a">
                          <span className="color-text-a">Email .</span> support@metabrainz.org
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="col-sm-12 col-md-4 section-md-t3">
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
                            <i className="bi bi-chevron-right"/> <a href="https://metabrainz.org/" target="_blank">MetaBrainz</a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 section-md-t3">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">Explore Us</h3>
                    </div>
                    <div className="w-body-a">
                      <ul className="list-unstyled">
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://listenbrainz.org/" target="_blank">ListenBrainz</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://critiquebrainz.org/" target="_blank">CritiqueBrainz</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://picard.musicbrainz.org/" target="_blank">Picard</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://bookbrainz.org/" target="_blank">BookBrainz</a>
                        </li>
                        <li className="item-list-a">
                          <i className="bi bi-chevron-right"/> <a href="https://acousticbrainz.org/" target="_blank">AcousticBrainz</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-footer">
                    <p className="copyright color-text-a">
                      Brought to you by <span className="color-a"> MetaBrainz Foundation </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          </>
)
    }
}
export default Footer;