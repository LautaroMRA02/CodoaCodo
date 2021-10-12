
function promedio3(n1,n2,n3){
    let promedio = (n1+n2+n3)/3;
    return promedio
}

var num1 = Number(prompt("ingrese un numero:"));
var num2 = Number(prompt("ingrese un numero:"));
var num3 = Number(prompt("ingrese un numero:"));

document.write(`el promedio es: ${promedio3(num1,num2,num3)}`);