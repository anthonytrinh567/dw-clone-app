$(document).ready(function(){
  $('.gallery').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
  });
  $('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
  $('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
});