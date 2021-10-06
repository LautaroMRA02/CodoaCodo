var calificacion = () => {
    let nota = Number(prompt("cual es tu calificacion: "));
    const CALIFICAION_NOTA = {
        1 :'Muy deficiente',
        2 :'Muy deficiente',
        3 :'Muy deficiente',
        4 :'Insuficiente',
        6 :'Insuficiente',
        7 :'Bien',
        8 :'Notable',
        9 :'Notable',
        10 :'Sobresaliente',
    }
    const CALIFICATION_FINALY = CALIFICAION_NOTA[nota];
    document.write(CALIFICATION_FINALY);
}
calificacion() 