import React from "react";
import './Explore.css';

function Explore(props) {
    let theme;
    if (props.isDarkThemeActive) {
        theme = "services theme-dark";
    } else {
        theme = "services theme-light";
    }
    return(
        <section id="services" className={"section-bg "+theme}>
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-in">Explore MusicBrainz</h2>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex" data-aos="fade-right">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://community.metabrainz.org" target="_blank">Community Driven</a></h5>
                                <p className="card-text">
                                    MusicBrainz is a community-maintained open source encyclopedia of music information.

                                    This means that anyone — including you — can help contribute to the project by adding information about your favorite artists and their works.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex" data-aos="fade-left">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://musicbrainz.org/doc/Development" target="_blank">Development</a></h5>
                                <p className="card-text">
                                    If you have a digital music collection, MusicBrainz Picard will help you tag your files.

                                    If you are a developer, our developer resources will help you in making use of our data.

                                    If you are a commercial user, our live data feed will provide your local database with replication packets to keep it in sync.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex" data-aos="fade-right">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://musicbrainz.org/doc/General_FAQ#Why_would_I_need_to_use_MusicBrainz.3F_What.27s_wrong_with_Gracenote.27s_CDDB.3F" target="_blank">History</a></h5>
                                <p className="card-text">
                                    In 2000, Gracenote took over the free CDDB project and commercialized it, essentially charging users for accessing the very data they themselves contributed. In response, Robert Kaye founded MusicBrainz. The project has since grown rapidly from a one-man operation to an international community of enthusiasts that appreciates both music and music metadata. Along the way, the scope of the project has expanded from its origins as a mere CDDB replacement to the true music encyclopedia MusicBrainz is today.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex" data-aos="fade-left">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://musicbrainz.org/doc/Editing_FAQ" target="_blank">Varied and Never Ending</a></h5>
                                <p className="card-text">
                                    As an encyclopedia and as a community, MusicBrainz exists only to collect as much information about music as we can. We do not discriminate or prefer one "type" of music over another, and we try to collect information about as many different types of music as possible. Whether it is published or unpublished, popular or fringe, western or non-western, human or non-human — we want it all in MusicBrainz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Explore;