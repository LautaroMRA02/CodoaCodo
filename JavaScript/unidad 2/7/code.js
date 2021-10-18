
var imprimirValores = () => {
    let n = Number(prompt("ingrese un numero:"));
    let siguiente = n + 1;
    let doble = n + n;
    let cuadrado = n ** 2;
    document.write(`el siguiente numero de ${n} es ${siguiente}, el doble es ${doble} y el cuadrado ${cuadrado}`)
};

imprimirValores();