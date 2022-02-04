

var canvas = document.getElementById('mittCanvas');


var ctx = canvas.getContext("2d");


var x = 0;
var y = 0;
var sizeX = 50;
var sizeY = 50;

var canvasHeight = canvas.height;
var canvasWidth = canvas.width;




document.addEventListener('keydown',function(e){
    console.log(e);
    if(e.key == 'ArrowUp'){
        y -= 10;
    }else if(e.key == 'ArrowDown'){
        y += 10;
    }else if(e.key == 'ArrowRight'){
        x += 10;
    }else if(e.key == 'ArrowLeft'){
        x -= 10;
    }
    ctx.fillRect(x,y,sizeX, sizeY);
});
