let frase = prompt("Ingrese una frase: ");
vocales =["a","e","i","o","u"]
let conteo = 0
for(let n of frase){
    for(let x of vocales){
        if(n == x){
            conteo++
        } 
    }
}
document.write(`la palabra "${frase}" tiene ${conteo} vocales.`)
