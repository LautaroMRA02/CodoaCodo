function superficieCuadrado() {
    let n = Number(prompt("ingrese la base del cuadrado: "));
    cuadrado = n * n ;
    document.write(`la superficie de una base ${n} es ${cuadrado}`);
};

superficieCuadrado();