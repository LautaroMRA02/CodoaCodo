var edades = new Array(18,17, 17, 18, 20, 18, 18, 19, 16);

document.write(`la cantidad de alumnos son: ${edades.length}<br>`)

let i = 1;
while(i < edades.length){
    if(edades[i]%2==0){
        document.write(edades[i],"<br>");
        i++
    } else {
        i++
    }
}
document.write(`estas son todas las edades ${edades}`);