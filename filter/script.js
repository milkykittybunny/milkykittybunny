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

