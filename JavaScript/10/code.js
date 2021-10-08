let frase = prompt("Ingrese una frase: ");


vocales =["a","e","i","o","u"]

let conteo = []

for(let n of frase) {
   
    for(let vocal of vocales){
        if(vocal == n){
          conteo += vocal
        }
    }

}
document.write(`la palabra "${frase}" tiene las vocales:  `)
document.write(" ",conteo)