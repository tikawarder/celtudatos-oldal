var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');



var x=120;
var y=30;


for (i=1;i<31;i++) {
 context.beginPath();
 context.moveTo(x,y);
 context.lineTo(x+40,y+70);
 context.lineTo(x+80,y);
 context.lineTo(x,y);
 context.stroke();
 x=x+5;
 y=y+5
}
