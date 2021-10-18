// Crear una función que lea notas hasta que ingrese -1 y devuelve el
// promedio de las notas leídas. ( aunque no se suele leer valores en una
// función)Una función que se llame siguiente, que reciba como
// parámetro un valor entero, y devuelva el siguiente del número
// ingresado como parámetro



function notas() {
    let run = true;
    let suma = 0;
    let conteo = 0;
    
    while (run == true) {
        let numero = prompt("ingrese un numero: ");
        
        if (numero == -1 || numero == null || isNaN(numero) ) {
            run = false;
        }
        else {
            numero = Number(numero)
            suma += numero
            conteo++
        }
    }
    document.write(`el promedio es: ${suma / conteo}`)
}

notas();