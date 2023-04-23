
/* Funcion para el texto que solo permita minusculas 
y bloquee caracteres especiales y mayusculas */
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[ a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var p = document.querySelector(".contenedor-p");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar(){
    ocultarCosasDelante();
    var area = recuperarTexto()
    resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
    ocultarCosasDelante();
    var area = recuperarTexto()
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return (area.value);
}

function ocultarCosasDelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    p.classList.add("ocultar");
}

/* Comando para encriptar texto */

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal =textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal =textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal =textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal =textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal =textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
/* Comando para desencriptar texto */

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal =textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal =textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal =textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal =textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal =textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

/* Copiar texto */
function copiarAlPortapapeles(id_elemento) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }
