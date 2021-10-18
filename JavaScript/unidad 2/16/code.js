

function cuantosDias() {
    let d = Number(prompt(`Ingrese el dia: `))
    let m = Number(prompt(`Ingrese el mes: `))
    let a = prompt(`Ingrese el a;o: `)

    function logica(a) {
        if (a % 4 == 0) {
            var meses = {
                1: 'Enero tiene 31',
                2: 'Febrero tiene 29',
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
            return meses[m]
        } else {
            var meses = {
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
            return meses[m]
        }

    }
    document.write(`fecha ${d}/${m}/${a} ${logica(a)}`)
};
cuantosDias()