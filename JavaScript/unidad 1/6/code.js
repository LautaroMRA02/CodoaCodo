const num1 = new Number(prompt("ingrese un numero"));
const num2 = new Number(prompt("ingrese un numero"));
if (num1>num2){
    document.write(`${num1} es mayos que ${num2}`);
} else {
    document.write(`${num2} es mayos que ${num1}`);
}