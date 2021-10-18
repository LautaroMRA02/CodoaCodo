function ultimoDiaDelMes(){

    
    let a =Number(prompt(`Ingrese el año: `));
    let m =Number(prompt(`Ingrese el mes: `));

    var date = new Date(a, m-1);

    var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    document.write("<br>El ultimo día es: "+ultimoDia.getDate());


};


ultimoDiaDelMes();
