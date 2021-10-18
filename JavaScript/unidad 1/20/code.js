
var texto = ""
var run = true
while(run == true){
    var cadena = prompt(`ingrese una cadena  de texto o coloque "X" para cancelar: `);
    var corte = "X";
    if (cadena == corte){
        var run = false;
    }else if (cadena == null){
        var texto = texto.concat("");
    }else{
        var texto = texto.concat("-",cadena);
    }
}
document.write(texto)
