var numero = Number(prompt("ingrese un numero: "))
var aDivisible = (n) => {
    document.write(`${n} es divisible por: `)
    if (n % 2 == 0) {
        document.write(" 2 ");
    }
    if (n % 3 == 0) {
        document.write(" 3 ");
    }
    if (n % 5 == 0) {
        document.write(" 5 ")
    }
    if (n % 7 == 0) {
        document.write(" 7 ")
    }
}
aDivisible(numero);