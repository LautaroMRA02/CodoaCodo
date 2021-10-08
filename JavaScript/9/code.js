let frase = prompt("Ingrese una frase: ");
let repeticiones = 0;
for (n of frase){
    document.write(n)
    if(n == "a"){
        repeticiones++
    }
}
document.write(`la letra "a" se repitio ${repeticiones} en ${frase}`);