
var dni = Number(prompt("Ingrese su DNI"))

var analisisDNI = (dni) => {

    if (0 > dni <= 99999999) {

    }

}
function creaSumador(x) {

    return function (y) {

        return x + y;

    };

}
var suma5 = creaSumador(5);

var suma10 = creaSumador(10);

console.log(suma5(2)); // muestra 7

console.log(suma10(2)); // muestra 12