var imprimirElDobleDelSiguiente = () => {
    let a = Number(prompt("ingrese un numero: "));
    let siguiente = a + 1;
    let doble = siguiente + siguiente;
    let cuadrado = doble ** 2;

    document.write(`${siguiente} ${doble} ${cuadrado}`)
};
imprimirElDobleDelSiguiente();