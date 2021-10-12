

function maximo(num1 ,num2){
    if(num1 === num2){
        document.write(`num1:${num1} y num2:${num2} son exatamente iguales.`);
    }
    else if(num1 > num2){
        document.write(`num1:${num1} es mayor que num2:${num2}`);
    }else {
        document.write(`num2:${num2} es mayor que num1:${num1}`);
    }
}

var n1 = Number(prompt("ingrese un numero:"));
var n2 = Number(prompt("ingrese un segundo numero:"));

maximo(n1,n2);