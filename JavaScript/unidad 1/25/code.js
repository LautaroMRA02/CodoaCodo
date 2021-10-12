var contador = 0;
for (let numero = 1; numero <= 500; numero++) {
    if (numero % 4 == 0) {
        document.write(`${numero} (es multiplo de 4)<br>`);
    }
    else if (numero % 9 == 0) {
        document.write(`${numero} (es multiplo de 9)<br>`);
    } else {
        document.write(`${numero} <br>`)
    }
    contador++
    if (contador === 5) {
        var contador = 0;
        document.write(`--------------------------- <br>`)
    } else { continue }

}