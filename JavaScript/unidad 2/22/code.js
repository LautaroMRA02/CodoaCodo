var edades  =   new Array(18, 17, 17, 18, 20, 18, 18, 19, 16);
var edaes   =   new Array(20, 22, 19, 24, 60, 18);
function masGrande(arrayy) {
    const decen = function (a, b) {
        return b - a;
    };
    arrayy = arrayy.sort(decen);
    console.log(edades[0])
    return edades[0]
};
document.write(`la edades son: ${edades} y la mas alta es ${masGrande(edades)}`)