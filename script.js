//e---> enter
//o--->ober
//i--->imes
//a--->ai
//u--->ufat
function encriptar() {
    var frase = document.getElementById("texto-encriptado").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para multiples lineas
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
  
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto-encriptado").style.display = "show";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }

  function desencriptar() {
    var frase = document.getElementById("texto-encriptado").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea
    //m es para multiples lineas
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto-encriptado").style.display = "show";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }
  function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    
  }