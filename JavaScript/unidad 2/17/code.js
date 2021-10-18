// var d = Number(prompt(``));
// var m = Number(prompt(``));
// var a = Number(prompt(``));
// var fecha = new Date(a,m,d-1)
// document.write(`${fecha}`)



var objFecha = new Date(2021, 2, 30);
var dia  = objFecha.getDate();
var mes  = objFecha.getMonth();
var anio = objFecha.getFullYear();
// Devuelve: '1/2/2011':
document.write( dia + "/" + mes + "/" + anio );