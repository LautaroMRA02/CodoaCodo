var suma=0;
var run = true;
while (run === true){
    var num1 = prompt(`ingrese un numero o "X" para cancelar`);
    var corte = "X";
    if (num1 == corte || num1 == null){
        var run = false;
    }else if(num1 == null || isNaN(num1)){
        alert("no ingreso un Numero");
        num1 = Number(0);
        var suma = suma + num1;            
    }
    else{
        num1 = Number(num1)
         var suma = suma + num1            
    }
}
document.write(`la suma es ${suma}`)

