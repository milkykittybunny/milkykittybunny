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
