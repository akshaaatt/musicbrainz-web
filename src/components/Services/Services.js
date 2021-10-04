import React from "react";
import './Services.css';

function Services() {
    return(
        <section id="services" className="services section-bg">
            <div className="container">

                <div className="section-title">
                    <h2 data-aos="fade-in">Services</h2>
                    <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
                        fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                        <div className="card">
                            <div className="card-img">
                                <img src="assets/img/services-1.jpg" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Temporibus laudantium</a></h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                    tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read
                                    More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                        <div className="card">
                            <div className="card-img">
                                <img src="assets/img/services-2.jpg" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Aperiores voluptates</a></h5>
                                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read
                                    More</a></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                        <div className="card">
                            <div className="card-img">
                                <img src="assets/img/services-3.jpg" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Veritatis natus nisi</a></h5>
                                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                                    fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro
                                    quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read
                                    More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                        <div className="card">
                            <div className="card-img">
                                <img src="assets/img/services-4.jpg" alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"><a href="">Aliquam veritatis</a></h5>
                                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                                    quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam
                                    cumque ipsum officiis qui nihil aut incidunt aut</p>
                                <div className="read-more"><a href="#"><i className="bi bi-arrow-right"/> Read
                                    More</a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Services;