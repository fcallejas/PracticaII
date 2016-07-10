var image = document.getElementById('title-img-animated');

image.addEventListener('mousemove', function(evt){
	//image.style.backgroundImage= "url(../practica/images/foto2.JPG)";
	image.style.backgroundImage= "url(../practica/images/panoramica_noche.jpg)";
});

image.addEventListener('mouseleave', function(evt) {
	//image.style.backgroundImage= "url(../practica/images/foto1.JPG)";
	image.style.backgroundImage= "url(../practica/images/panoramica_dia.jpg)";
});