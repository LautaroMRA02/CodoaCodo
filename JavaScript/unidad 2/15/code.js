function bisiesto(){
    let year = Number(prompt("ingrese su año: "))
    if(year % 4 == 0){
        document.write(`${year} es año bisiesto.`)
    }
    else{
        document.write(`${year} no es año bisiesto.`)
    }
};

bisiesto();