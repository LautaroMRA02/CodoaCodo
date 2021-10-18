

//var meses = new Array("enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")

function cuantosDias() {
    const meses = {
        1: 'Enero tiene 31',
        2: 'Febrero tiene 28',
        3: 'Marzo tiene 31',
        4: 'Abril tiene 30',
        5: 'Mayo tiene 31',
        6: 'junio tiene 30',
        7: 'Julio tiene 31',
        8: 'Agosto tiene 31',
        9: 'Septiembre tiene 30',
        10: 'Octubre tiene 31',
        11: 'Nobiembre tiene 30',
        12: 'diciembre tiene 31'
    };
    let m = Number(prompt('ingrese un numero'))
    document.write(`${meses[m]}`)
    return console.log(meses[m])
}

cuantosDias();