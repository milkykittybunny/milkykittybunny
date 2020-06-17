var image;

function upload() {
  var canvas= document.getElementById("can");
  var inputfile = document.getElementById("inputfil");
  console.log("hahaha");
  console.log(inputfile);
  image = new SimpleImage(inputfile);
  image.drawTo(canvas); 
} 

function makegray() {  
  for(var pixel of image.values()) { 
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg); 
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  } 
  console.log(image);
  var canvas= document.getElementById("can2"); 
  image.drawTo(canvas); 
}

function redgreenblue() {
  var canvas = document.getElementById("can2");
  for (var pixel of image.values()) {
    var x = pixel.getX();
    if (x <= 400/3) {
      pixel.setRed(255);
    } else {
      if (x <= 400/3*2) {
        pixel.setGreen(255);
      } else{
        pixel.setBlue(255);    
      }
    }
  }
  image.drawTo(canvas);
}

$(document).ready(function(){
	// When page loads...:
	$("div.content div").hide(); // Hide all content
  
	/* Check for hashtag in url */
	if (window.location.hash.length>0) {
		console.log(window.location.hash);
		/*find the menu item with this hashtag*/
		$( "nav li a" ).each(function() {
			if ( $( this ).attr("href") == window.location.hash )
				$( this ).parent().addClass("current").show(); // Activate page in menu
		});
		$(window.location.hash).fadeIn(); // Fade in the active page content
	}
	else { /* no hashtag: */
	  $("nav li:first").addClass("current").show(); // Activate first page
	  $("div.content div:first").show(); // Show first page content
	}

	// On Click Event (within list-element!)
	$("nav li").click(function() {
		$("nav li").removeClass("current"); // Remove any active class
		$(this).addClass("current"); // Add "current" class to selected page
		
		$("div.content div").hide(); // Hide all content

    // Find the href attribute value to identify the active page:
		var activePage = $(this).find("a").attr("href"); 
		$(activePage).fadeIn(); // Fade in the active page
	}); // end click method
	
}); // end $(document).ready method