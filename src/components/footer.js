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