$(document).ready(function(){

	var val = 1;

  $(".nav-bar").click(function(){


  	if (val == 1) {

	  	$("header nav").animate({
	    	'left' : '0'
	    });
	    val = 0;
  	}else{
  		val = 1;
  		$("header nav").animate({
		    'left' : '-100%'
		});
  	}



    return false;
  });

  // submenu
  $('.sub-menu').click(function(){
  	$(this).children('.children').slideToggle();
  })
}); 
// javaScript.....
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
  // counter js
  $('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//mixiup portpolio....accordion

$(document).ready(function(){
  $(function(){
    $('.mymixcont').mixItUp();
  });

});
// Can also be used with
$(document).ready(function() {
  $("#lightSlider").lightSlider(); 
});
$(document).ready(function(){
    $(".btn").addClass("animated shake slower");
});