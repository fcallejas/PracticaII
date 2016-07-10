var arrExperienciaEmpresa=['1.Universidad de Caldas','2.Universidad Nacional','3.Zurich de Occidente S.A.','4.CasaLuker S.A.','5.BPMCo S.A.S.','6.Soluciones Tecnológicas de Mercadeo S.A.S.'];
var arrExperienciaAnno=['2001','2003','2003','2004','2011','2014'];
var arrExperienciaCargo=['Docente','Docente','Ingeniero de Soporte','Profesional de Informática','Gerente','Gerente'];

document.getElementById('otroCual').style.display='none';
document.getElementById('1divExp').addEventListener('mouseover',mostrarExperiencia);
document.getElementById('divExp2').addEventListener('mouseover',mostrarExperiencia);
document.getElementById('3divExp').addEventListener('mouseover',mostrarExperiencia);
document.getElementById('divExp4').addEventListener('mouseover',mostrarExperiencia);
document.getElementById('5divExp').addEventListener('mouseover',mostrarExperiencia);
document.getElementById('6divExp').addEventListener('mouseover',mostrarExperiencia);
document.getElementById('exp3').addEventListener('mouseover',mostrarExperiencia2);
document.getElementById('exp2').addEventListener('mouseover',mostrarExperiencia3);
document.getElementById('txtArea').addEventListener('keyup',contarPalabras);
document.getElementById('txtArea').addEventListener('mouseover',contarPalabras);

function contarPalabras(){
	var maxPalabras=500;
	var objtxtArea=document.getElementById('txtArea');
	var txtArea= objtxtArea.value;
	var cantPalabras=txtArea.split(' ');

	if(cantPalabras.length >maxPalabras){
		alert('Llegó al máximo de palabras '+ maxPalabras);
		objtxtArea.value='';
		for(var i=0;i<maxPalabras;i++){
			objtxtArea.value +=cantPalabras[i] + ' ';
		}
		return false;
	}else{
		document.getElementById('txtPalabras').innerHTML=cantPalabras.length+' palabras de '+maxPalabras;
		return true;
	}

}


function mostrarOtro(){
	var valConocido=document.getElementById('conocido').value;
	if(valConocido=='Otra forma'){
		document.getElementById('otroCual').style.display='';
	}else{
		document.getElementById('otroCual').style.display='none';
		document.getElementById('cual').value='';
	}
}


function mostrarExperiencia(evnt){
	document.getElementById('detalleExperiencia').removeAttribute('class');
	document.getElementById('detalleExperiencia').style.display='';
	document.getElementById('tdLogo').innerHTML='<img class="detalleTdLogo" src="'+ document.getElementById(evnt.currentTarget.id).children[0].children[0].src+'" alt="Logo">';
	var indice=eval(evnt.currentTarget.id.substring(0,1))-1;
	document.getElementById('tdTexto').innerHTML=arrExperienciaEmpresa[indice] + '<br/>' + arrExperienciaCargo[indice]+ '<br/>' + arrExperienciaAnno[indice]; 
}

function mostrarExperiencia2(evnt){
	document.getElementById('tdLogo').innerHTML='<img class="detalleTdLogo" src="images/casaluker.jpg" alt="Logo">';
	var indice=3;
	document.getElementById('tdTexto').innerHTML=arrExperienciaEmpresa[indice] + '<br/>' + arrExperienciaCargo[indice]+ '<br/>' + arrExperienciaAnno[indice]; 
}

function mostrarExperiencia3(evnt){
	document.getElementById('tdLogo').innerHTML='<img class="detalleTdLogo" src="images/un.jpg" alt="Logo">';
	var indice=1;
	document.getElementById('tdTexto').innerHTML=arrExperienciaEmpresa[indice] + '<br/>' + arrExperienciaCargo[indice]+ '<br/>' + arrExperienciaAnno[indice]; 
}

