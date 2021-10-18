
const getValueInput = () => {
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("valueInput").innerHTML = inputValue;
    console.log(inputValue)


    // document.getElementById('domTextElement').addEventListener('input', function () {
    //     campo = event.target;
    //     valido = document.getElementById('emailMensaje');

    //     emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //         ;
    //     if (emailRegex.test(campo.value)) {
    //         valido.innerText = "válido";
    //     } else {
    //         valido.innerText = "incorrecto";
    //     }
    // });



}