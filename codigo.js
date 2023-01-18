
var puntos= 0;
var goles = 0;
var tienda = [0,0,0];
var produccionGoles = [1,2,5,];
var precioTienda = [50,300,1000,];
var FPS = 30;
var FPSProduccion = 1;

function clic(){
    goles++;
    puntos++;
}

function comprar(mejora){
if(goles>= precioTienda[mejora]){
tienda[mejora]++;
goles-= precioTienda[mejora];
//alert("Compra Realizada")
} else {
    alert("GOLES INSUFICIENTES")
}
}
function produccion(){
    for(contador=0; contador<tienda.length; contador++){
        goles += tienda[contador] * produccionGoles[contador]
        puntos+= tienda[contador] * produccionGoles[contador];
    }
}

function render(){
    document.getElementById("contador").innerHTML = "Goles: " + goles ;
    document.getElementById("puntos").innerHTML = "Puntaje Total: " + puntos ;
    document.getElementById("tienda").innerHTML = 
    `Piernas: ${tienda[0]}<br>
    Balones: ${tienda[1]}<br>
    Copas: ${tienda[2]}`;
}
setInterval(function(){
render();
},1000/FPS);

setInterval(function(){
    produccion();
},1000/FPSProduccion)