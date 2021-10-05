import React from "react";
import './Services.css';

function Services() {
    return(
        <section id="services" className="services section-bg">
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-in">Explore MusicBrainz</h2>
                    <p data-aos="fade-in">
                        In 2000, Gracenote took over the free CDDB project and commercialized it, essentially charging users for accessing the very data they themselves contributed. In response, Robert Kaye founded MusicBrainz. The project has since grown rapidly from a one-man operation to an international community of enthusiasts that appreciates both music and music metadata. Along the way, the scope of the project has expanded from its origins as a mere CDDB replacement to the true music encyclopedia MusicBrainz is today.

                        As an encyclopedia and as a community, MusicBrainz exists only to collect as much information about music as we can. We do not discriminate or prefer one "type" of music over another, and we try to collect information about as many different types of music as possible. Whether it is published or unpublished, popular or fringe, western or non-western, human or non-human — we want it all in MusicBrainz.</p>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                        <div className="card">
                            <div className="card-img">
                                <img src="assets/img/features/community.jpg" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://community.metabrainz.org" target="_blank">Community Driven</a></h5>
                                <p className="card-text">
                                    MusicBrainz is a community-maintained open source encyclopedia of music information.

                                    This means that anyone — including you — can help contribute to the project by adding information about your favorite artists and their works.
                                </p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read
                                    More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                        <div className="card">
                            <div className="card-img">
                                <img src="assets/img/features/development.jpg" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://musicbrainz.org/doc/Development" target="_blank">Development</a></h5>
                                <p className="card-text">
                                    If you have a digital music collection, MusicBrainz Picard will help you tag your files.

                                    If you are a developer, our developer resources will help you in making use of our data.

                                    If you are a commercial user, our live data feed will provide your local database with replication packets to keep it in sync.
                                </p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read
                                    More</a></div>
                            </div>
                        </div>

                    </div>
                    {/*<div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">*/}
                    {/*    <div className="card">*/}
                    {/*        <div className="card-img">*/}
                    {/*            <img src="assets/img/services-3.jpg" alt="..."/>*/}
                    {/*        </div>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <h5 className="card-title"><a href="">Veritatis natus nisi</a></h5>*/}
                    {/*            <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut*/}
                    {/*                fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro*/}
                    {/*                quisquam est, qui dolorem ipsum quia dolor sit amet</p>*/}
                    {/*            <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read*/}
                    {/*                More</a></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">*/}
                    {/*    <div className="card">*/}
                    {/*        <div className="card-img">*/}
                    {/*            <img src="assets/img/services-4.jpg" alt="..."/>*/}
                    {/*        </div>*/}
                    {/*        <div className="card-body">*/}
                    {/*            <h5 className="card-title"><a href="">Aliquam veritatis</a></h5>*/}
                    {/*            <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro*/}
                    {/*                quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam*/}
                    {/*                cumque ipsum officiis qui nihil aut incidunt aut</p>*/}
                    {/*            <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read*/}
                    {/*                More</a></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </section>
    )
}
export default Services;