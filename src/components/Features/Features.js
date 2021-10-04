import React from "react";
import './Features.css';

function Features() {
    return(
        <section id="features" className="features section-bg">
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-in">* Brainz Projects</h2>
                    <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
                        fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row content">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src="assets/img/meb-logos/listenbrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-4" data-aos="fade-left">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bi bi-check"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li><i className="bi bi-check"/> Duis aute irure dolor in reprehenderit in voluptate
                                velit.
                            </li>
                        </ul>
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
                        <p>Checkout</p>
                        <ul>
                            <li><i className="bi bi-check"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li><i className="bi bi-check"/> Duis aute irure dolor in reprehenderit in voluptate
                                velit.
                            </li>
                            <li><i className="bi bi-check"/> Facilis ut et voluptatem aperiam. Autem soluta ad
                                fugiat.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                        <img src="assets/img/meb-logos/coverartarchive.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                        <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src="assets/img/meb-logos/critiquebrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5" data-aos="fade-left">
                        <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                        <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe
                            odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                        <ul>
                            <li><i className="bi bi-check"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li><i className="bi bi-check"/> Duis aute irure dolor in reprehenderit in voluptate
                                velit.
                            </li>
                            <li><i className="bi bi-check"/> Facilis ut et voluptatem aperiam. Autem soluta ad
                                fugiat.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                        <img src="assets/img/meb-logos/bookbrainz.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                        <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Features;