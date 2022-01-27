var input = document.querySelector("input");
input.focus();

function error() {
    alert("El mensaje ingresado no puede desencriptarse con las llaves utilizadas. Es posible que sea incorrecto.");
    return(input.value);
}

function escribir(texto, n) {
	document.getElementById('cajaTexto').innerHTML = texto;
	if (n == 1) {
		document.getElementById("mensaje").innerText = "encriptado";
	} else {
		document.getElementById("mensaje").innerText = "desencriptado";
	}
}

function copiar() {
	var copTexto = document.getElementById("cajaTexto").innerHTML;
	navigator.clipboard.writeText(copTexto);
}

/* Definimos las funciones de encriptación/desencriptación */

// Función para encriptar el texto ingresado
function encriptar() {
    var texto = input.value;
   	for (var i = 0; i < texto.length; i++) {
		switch(texto[i]) {
			case 'a':
				texto = texto.slice(0, i) + "ai" + texto.slice(i+1);
				i++;
				break;
			case 'e':
				texto = texto.slice(0, i) + "enter" + texto.slice(i+1);
				i += 4;
				break;
			case 'i':
				texto = texto.slice(0, i) + "imes" + texto.slice(i+1);
				i += 3;
				break;
			case 'o':
				texto = texto.slice(0, i) + "ober" + texto.slice(i+1);
				i += 3;
				break;
			case 'u':
				texto = texto.slice(0, i) + "ufat" + texto.slice(i+1);
				i += 3;
				break;
			default:
				break;
		}
	}

	escribir(texto, 1);
    input.value = "";
	input.focus();
}

// Función para desencriptar el texto ingresado
function desencriptar () {
	var texto = input.value;
	for (var i = 0; i < texto.length; i++) {
		switch(texto[i]) {
			case 'a':
				if(texto.slice(i, i+2) == 'ai'){
					texto = texto.slice(0, i) + "a" + texto.slice(i+2);
				} else {
					i = error();
				}
				break;
			case 'e':
				if(texto.slice(i, i+5) == 'enter'){
					texto = texto.slice(0, i) + "e" + texto.slice(i+5);
				} else {
					i = error();
				}
				break;
			case 'i':
				if(texto.slice(i, i+4) == 'imes'){
					texto = texto.slice(0, i) + "i" + texto.slice(i+4);
				} else {
					i = error();
				}
				break;
			case 'o':
				if(texto.slice(i, i+4) == 'ober'){
					texto = texto.slice(0, i) + "o" + texto.slice(i+4);
				} else {
					i = error();
				}
				break;
			case 'u':
				if(texto.slice(i, i+4) == 'ufat'){
					texto = texto.slice(0, i) + "u" + texto.slice(i+4);
				} else {
					i = error();
				}
				break;
			default:
				break;
		}

		if(i == texto.length - 1) {
			escribir(texto, 2);
		}
	}

	input.value = "";
	input.focus();
}

var boton = document.querySelectorAll("button");
boton[0].onclick = encriptar;
boton[1].onclick = desencriptar;
boton[2].onclick = copiar;