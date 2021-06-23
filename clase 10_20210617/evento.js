const boton = document.getElementById("enviar");
const ancho = document.getElementById("ancho");
const alto = document.getElementById("alto");
const colorFuente = document.getElementById("color_fuente");
const colorFondo = document.getElementById("color");;
const tamanoFunte = document.getElementById("tamano_fuente");
const contenedor = document.getElementById("contenedor");

const accionEnviar = () => {
    contenedor.style.width = ancho.value + "px";
    contenedor.style.height = alto.value + "px";
    contenedor.style.background = colorFondo.value;
    contenedor.style.fontSize = tamanoFunte.value + "px";
    contenedor.style.color = colorFuente.value;
}

boton.addEventListener('click', accionEnviar);