
var imprimirElDobleDelSiguiente = () => {
    let a = Number(prompt("ingrese un numero: "));
    let resultado = (a+1)**2;
    document.write(`el numero ingresado es ${a} el siguiente es ${a+1} y el cuadrado de este es ${resultado}`)
};
imprimirElDobleDelSiguiente();