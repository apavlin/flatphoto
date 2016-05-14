//= ../../bower_components/jquery/dist/jquery.min.js
//= nav.js
//= ../../node_modules/photoswipe/dist/photoswipe.min.js
//= ../../node_modules/photoswipe/dist/photoswipe-ui-default.min.js
//= photoswipe.js
//= ../../node_modules/scrollreveal/dist/scrollreveal.min.js
//= ../../node_modules/isotope-layout/dist/isotope.pkgd.min.js

$('.gallery__box:has(.gallery__img[src="img/flats/thumbnails/flat4-8.jpg"])').addClass('panorama100');
$('.gallery__box:has(.gallery__img[src="img/flats/thumbnails/flat6-10.jpg"], .gallery__img[src="img/flats/thumbnails/flat1-2.jpg"], .gallery__img[src="img/flats/thumbnails/flat3-3.jpg"])').addClass('panorama50');
$('.gallery__link[href="img/flats/flat4-5.jpg"], .gallery__link[href="img/flats/flat5-8.jpg"], .gallery__link[href="img/flats/flat6-6.jpg"], .gallery__link[href="img/flats/flat6-7.jpg"]').attr("data-size", "1863x2500");
$('.gallery__link[href="img/flats/flat4-8.jpg"]').attr("data-size", "3500x914");

$(document).ready(function() {


  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
  });


window.sr = ScrollReveal({ duration: 1500 });
sr.reveal('.gallery__img');



function masonryFunc(){
$('.gallery').isotope({
  // options
  itemSelector: '.gallery__box',
  columnWidth: '.grid-sizer'
  // percentPosition: true
});
};
masonryFunc();
setTimeout(masonryFunc,300);

});


