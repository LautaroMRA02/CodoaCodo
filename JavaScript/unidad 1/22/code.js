
var analisisDNI = () => {
    let letraDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", 'X', "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var run = true
    while (run === true) {
        let dni = Number(prompt("Ingrese su DNI"));
        var rango = () => {
            if (dni < 99999999 & dni > 0) {
                alert("numero en de rango");
                return true
            }
            else {
                alert("numero fuera de rango");
                return false
            }
        }
        var rango = rango()
        if (rango == true) {
            datoDni = dni % 23;
            document.write(`Su dni(${dni}) equivale a  la letra ${letraDni[datoDni]}`);
            var run = false
        }
        else {
            alert("Ingrese numeros");
            var run = true
        }
    }
};
analisisDNI();