import React, { Component } from 'react';
import SectionFooter from "./SectionFooter";

class Footer extends Component {
    render() {
        return (
        <>
		 <SectionFooter/>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-3 d-none d-md-block">
                  <div className="copyright-footer">
                    <p className="copyright color-text-a">
                     Open Source Enthusiast?  <a href="https://github.com/metabrainz/musicbrainz-server" target="_blank"> <span className="color-a"> Contribute Here </span> </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="copyright-footer">
                    <p className="copyright color-text-a">
                      Brought to you by <img src="assets/img/MetaBrainz.svg" width="30" height="30" alt="image"/> <span className="color-a"> MetaBrainz Foundation </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3 d-none d-md-block">
                  <div className="copyright-footer">
                    <p className="copyright color-a">
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
}
export default Footer;