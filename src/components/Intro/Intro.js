const Intro = props => {
    return(

        <section class="section-property section-t8">
           <div class="container">
             <div class="row">
               <div class="col-md-12">
                 <div class="title-wrap d-flex justify-content-between">
                   <div class="title-box">
                     <h2 class="title-a">Backed By</h2>
                   </div>
                   <div class="title-link">
                     <a href="/">All Users
                       <span class="bi bi-chevron-right"></span>
                     </a>
                   </div>
                 </div>
               </div>
             </div>

             <div id="property-carousel" class="swiper-container">
               <div class="swiper-wrapper">

                 <div class="carousel-item-b swiper-slide">
                   <div class="card-box-a">
                     <div class="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" class="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>

                 <div class="carousel-item-b swiper-slide">
                   <div class="card-box-a">
                     <div class="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" class="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>

                 <div class="carousel-item-b swiper-slide">
                   <div class="card-box-a">
                     <div class="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" class="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>

                 <div class="carousel-item-b swiper-slide">
                   <div class="card-box-a">
                     <div class="img-box-a">
                       <img src="assets/img/Google.jpg" alt="" class="img-a img-fluid"/>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div class="propery-carousel-pagination carousel-pagination"></div>

           </div>
         </section>
      )
}
export default Intro;