function circuloSuperficie(){
    let r = Number(prompt(`ingrese el radio del circulo: `));
    const pi = 3.14;
    let s = pi * (r ** 2);
    return s 
};
console.log(circuloSuperficie())