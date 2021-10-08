var numero1 = Number(prompt("Ingrese un numero: "))
var numero2 = Number(prompt("Ingrese un numero: "))


var aDivisoresComunes = (a, b) => {
    document.write(`Divisores comunes de ${a} y ${b} son: `)
    if (a == 0 || b == 0) {
        document.write(`no se encuentras divisores`)
    } else {

        if (a % 2 === 0 & b % 2 === 0) {
            document.write(" 2 ");
            pass
        }
        else if (a % 3 === 0 & b % 3 === 0) {
            document.write(" 3 ");
            pass
        }
        else if (a % 5 === 0 & b % 5 === 0) {
            document.write(" 5 ");
            pass
        }
        else if (a % 7 === 0 & b % 7 === 0) {
            document.write(" 7 ");
            pass
        } else {
            document.write("no se encontraron divisores")
        }
    }
}
aDivisoresComunes(numero1, numero2)