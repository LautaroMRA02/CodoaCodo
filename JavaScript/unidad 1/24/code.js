
var hasta = Number(prompt("ingrese un numero"));
for ( let num = 1;hasta >= num; hasta--){
    stringIni= hasta.toString()
    document.write(`${stringIni.repeat(hasta)}  <br>`);
}
