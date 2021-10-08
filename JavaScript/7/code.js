const num1 = new Number(prompt("ingrese un numero A"));
const num2 = new Number(prompt("ingrese un numero B"));
const num3 = new Number(prompt("ingrese un numero C"));
if (num1 > num2 & num1 > num3) {
    document.write(`numero A ${num1} es mayos que B ${num2} y C ${num3}`);
}
else if (num2 > num1 & num2 > num3) {
    document.write(`numero B ${num2} es mayos que A ${num1} y C ${num3}`);
} else {
    document.write(`numero C ${num3} es mayos que A ${num1} y B ${num2}`);
}