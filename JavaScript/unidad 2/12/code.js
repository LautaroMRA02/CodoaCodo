function radio(){
    let r = Number(prompt(`ingrese el radio del circulo: `));
    const pi = 3.14;
    let circ = 2 * pi * r; 

    document.write(`la circunferencia de un circulo de radio de ${r} es ${circ}`)
};

radio();