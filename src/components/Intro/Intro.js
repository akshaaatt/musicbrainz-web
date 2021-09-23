const Intro = props => {
    return(
        <section className="section-property section-t8">
           <div className="container">
             <div className="row">
               <div className="col-md-12">
                 <div className="title-wrap d-flex justify-content-between">
                   <div className="title-box">
                     <h2 className="title-a">Backed By</h2>
                   </div>
                   <div className="title-link">
                     <a href="/">All Users
                       <span className="bi bi-chevron-right"/>
                     </a>
                   </div>
                 </div>
               </div>
             </div>

             <div id="property-carousel" className="swiper-container">
               <div className="swiper-wrapper">

                 <div className="carousel-item-b swiper-slide">
                   <div className="card-box-a">
                     <div className="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" className="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>

                 <div className="carousel-item-b swiper-slide">
                   <div className="card-box-a">
                     <div className="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" className="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>

                 <div className="carousel-item-b swiper-slide">
                   <div className="card-box-a">
                     <div className="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" className="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>

                 <div className="carousel-item-b swiper-slide">
                   <div className="card-box-a">
                     <div className="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" className="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="propery-carousel-pagination carousel-pagination"/>

           </div>
         </section>
      )
}
export default Intro;