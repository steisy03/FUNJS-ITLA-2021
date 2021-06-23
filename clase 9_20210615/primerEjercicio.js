// var diametro = prompt("Digite el diametro").replace(/ /g, "");
// var grosor = prompt("Digite el grosor").replace(/ /g, "");
const boton = document.getElementById("enviar");
const diametro = document.getElementById("diametro");
const grosor = document.getElementById("grosor");

const accionEnviar = () => {
    //ejercicio A con operadores logicos
    if(diametro.value > 1.4){
        alert("La rueda es para un vehículo grande");
    } else if(diametro.value  >0.8 && diametro.value  <= 1.4){
        alert("La rueda es para un vehículo mediano");
    } else {
        alert("La rueda es para un vehículo pequeño");
    }

    //ejercicio B con operadores logicos
    if((diametro.value  > 1.4 && grosor.value  < 0.4) || ((diametro.value  > 0.8 && diametro.value  <= 1.4) && grosor.value  < 0.5 )){
        alert("El grosor para esta rueda es inferior al recomendado");
    }
}

boton.addEventListener('click', accionEnviar);