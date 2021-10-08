var numero = new Number(prompt("ingrese un numero"))


var aPrimo = (num) => {
    if (num == 0 || num == 1 || num == 4) {
        document.write(`${num} no es un numero primo`);
        return false
    };
    for (let x = 2; x < num / 2; x++) {
        if (num % x == 0) {
            document.write(`${num} no es un numero primo`);
            return false
        }

    }
    document.write(`${num} es un numero primo`);
}

aPrimo(numero);