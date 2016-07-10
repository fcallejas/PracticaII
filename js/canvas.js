function unirExperiencia(){
var color="black";
var c=document.getElementById("exp1");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=color;
ctx.moveTo(50,0);
ctx.lineTo(230,110);
ctx.stroke();

var d=document.getElementById("exp2");
var dctx=d.getContext("2d");

dctx.beginPath();
dctx.strokeStyle=color;
dctx.moveTo(90,400);
dctx.lineTo(280,70); 
dctx.stroke();


var e=document.getElementById("exp3");
var ectx=e.getContext("2d");

ectx.beginPath();
ectx.strokeStyle=color;
ectx.moveTo(130,0);
ectx.lineTo(230,90); 
ectx.stroke();

var f=document.getElementById("exp4");
var fctx=f.getContext("2d");

fctx.beginPath();
fctx.strokeStyle=color;
fctx.moveTo(0,400);
fctx.lineTo(320,50); 
fctx.stroke();

var g=document.getElementById("exp5");
var gctx=g.getContext("2d");

gctx.beginPath();
gctx.strokeStyle=color;
gctx.moveTo(120,0);
gctx.lineTo(230,110); 
gctx.stroke();
}