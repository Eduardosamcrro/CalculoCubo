//Calculando o cubo
//Volume = a eleavado a 3
//Area = 6 . a elevado a 2
//Aresta é a reta que se origina a partir da interseção de dois planos que formam um ângulo.

//Calculo para o volume
function calcularVolume(aresta) {
    var volume = Math.pow(aresta, 3);
    return volume;
}
//Calculo para a area
function calcularArea(aresta) {
    var area = 6 * Math.pow (aresta, 2);
    return area;
}

var ladoDoCubo =  7;
var volumeDoCubo = calcularVolume(ladoDoCubo);
var areaDoCubo = calcularArea(ladoDoCubo);

console.log ("O Cubo tem o volume igual a: " + volumeDoCubo);
console.log("o Cubo tem a area igual a: " + areaDoCubo);
