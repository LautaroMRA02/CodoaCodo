let frase = prompt("ingrese una palabra")
let vocales = ["a", "e", "i", "o", "u"]
var conteoA=0, conteoE=0, conteoI=0, conteoO=0, conteoU=0;
for (n of frase) {
    //document.write(n)
    for (x of vocales) {
        if (n == x) {
            switch (n) {
                case "a":
                    conteoA++
                    continue;
                case "e":
                    conteoE++
                    continue;
                case "i":
                    conteoI++
                    continue;
                case "o":
                    conteoO++
                    continue;
                case "u":
                    conteoU++
                    continue;

                default:
                    break;
            }

        }
    }
}
document.write(`en la palabra ${frase} hay a:${conteoA} e:${conteoE} i:${conteoI} o:${conteoO} u:${conteoU}`)