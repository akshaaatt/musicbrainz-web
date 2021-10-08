import React from "react";
import './Projects.css';

function Projects(props) {
    let background;
    if (props.isDarkThemeActive) {
        background = "section-bg-dark";
    }
    else {
        background = "section-bg";
    }

    return(
        <section id="features" className={background}>
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-in">* Brainz Projects</h2>
                    <p data-aos="fade-in">
                        MusicBrainz is operated by the MetaBrainz Foundation, a California based non-profit corporation dedicated to keeping MusicBrainz free and open source.
                        Explore the fellow Brainz projects as well!
                    </p>
                </div>

                <div className="row content">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src="assets/img/meb-logos/listenbrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-4" data-aos="fade-left">
                        <h3>An open record of user listening habits</h3>
                        <p className="fst-italic">
                            Checkout
                        </p>
                        <p>
                            ListenBrainz keeps tracks of what music you listen to and provides you with insights into your listening habits. We're completely open-source and publish our data as open data.

                            You can use ListenBrainz to track your music listening habits and share your taste with others using our visualizations.
                        </p>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                        <img src="assets/img/meb-logos/picard.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                        <h3>A cross-platform music tagger</h3>
                        <p className="fst-italic">
                            Checkout
                        </p>
                        <p>
                            MusicBrainz Picard is a cross-platform music file tagger. This User Guide is intended to augment the information provided on the Picard website and to provide an alternate format for the documentation, including a PDF document suitable for printing. Links to additional information such as scripts, plugins and tutorials are provided when available rather than trying to reproduce the information in this document.
                        </p>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src="assets/img/meb-logos/acousticbrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5" data-aos="fade-left">
                        <h3>A crowdsourced collection of acoustic information</h3>
                        <p className="fst-italic">
                            Checkout
                        </p>
                        <p>
                            The AcousticBrainz project aims to crowd source acoustic information for all music in the world and to make it available to the public. This acoustic information describes the acoustic characteristics of music and includes low-level spectral information and information for genres, moods, keys, scales and much more. The goal of AcousticBrainz is to provide music technology researchers and open source hackers with a massive database of information about music.

                            AcousticBrainz is a joint effort between Music Technology Group at Universitat Pompeu Fabra in Barcelona and the MusicBrainz project.
                        </p>
                        </div>
                </div>

                <div className="row content">
                    <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                        <img src="assets/img/meb-logos/coverartarchive.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                        <h3>A repository of music cover art that is freely and easily accessible</h3>
                        <p className="fst-italic">
                            Checkout
                        </p>
                        <p>
                            The Cover Art Archive is a joint project between the Internet Archive and MusicBrainz, whose goal is to make cover art images available to everyone on the Internet in an organised and convenient way.

                            Images in the archive are curated by the MusicBrainz community and go through a peer review process to ensure that they are correct, free of spam and of the best quality.
                        </p>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src="assets/img/meb-logos/critiquebrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5" data-aos="fade-left">
                        <h3>A repository for Creative Commons licensed music reviews</h3>
                        <p className="fst-italic">
                            Checkout
                        </p>
                        <p>CritiqueBrainz is a repository for Creative Commons licensed music reviews. Here you can read what other people have written about an album or event and write your own review!

                            CritiqueBrainz is based on data from MusicBrainz - open music encyclopedia.
                            Everyone - including you - can participate and contribute.</p>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                        <img src="assets/img/meb-logos/bookbrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                        <h3>An open encyclopedia which contains information about published literature</h3>
                        <p className="fst-italic">
                            Checkout
                        </p>
                        <p>
                            BookBrainz is a project to create an online database of information about every single book, magazine, journal and other publication ever written. We make all the data that we collect available to the whole world to consume and use as they see fit. Anyone can contribute to BookBrainz, whether through editing our information, helping out with development, or just spreading the word about our project.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Projects;