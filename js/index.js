var canvasWidth=800;
var canvasHeight=600;


var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
canvas.width=canvasWidth;
canvas.height=canvasHeight;

var img=new Image();
var radius=50;
var clipImg={x:Math.random()*(canvas.width-2*radius)+radius, y:Math.random()*(canvas.height-2*radius)+radius, r:radius};
img.src='img/1.jpg';
img.onload=function(){
	iniImg();
}
function iniImg(){
	clipImg={x:Math.random()*(canvas.width-2*radius)+radius, y:Math.random()*(canvas.height-2*radius)+radius, r:radius};
	draw(img,clipImg);
}
//剪辑区域
function setClipImg(){
	ctx.beginPath();
	ctx.arc(clipImg.x, clipImg.y, clipImg.r, 0, Math.PI*2);
	ctx.clip();
}
function draw(img,clipImg){
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	
	ctx.save();
	setClipImg(clipImg);
	ctx.drawImage(img,0,0);
	ctx.restore();
}
function reset(){
	if(clipImg.r<=50){
		iniImg();
	}else if (clipImg.r>=1000) {
		var timer2=setInterval(function(){
			clipImg.r-=50;
			draw(img,clipImg);
			if (clipImg.r<=50) {
				clearInterval(timer2);
			}
		},30);
	}
	
	
	
	
}
function show(){
	var timer=setInterval(function(){
		clipImg.r+=50;
		draw(img,clipImg);
		if(clipImg.r>=1000){
			clearInterval(timer);
		}
	},30);
}



