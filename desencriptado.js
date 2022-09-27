
document.getElementById("botonD").onclick = validarD; //Accion que llama a la funcion validar, una vez que se haga clic en el botón

function validarD(){ //Declaración de la función que nos servirá para validar los parametros del texto

    var texto = document.getElementById("mensaje").value; //Extrae todo del area de texto
    var letrasMayusculas = /[A-Z]/g; // Variable que contiene todas las letras en Mayuscula
    var carEspecial = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g; // Variable que contiene la mayoría de caracteres especiales

    if(texto == ""){ //Validamos que el campo de texto no este vacio

        alert("El cuadro de texto no puede estar vacío"); //Arrojamos una alerta si se cumple la condición

    } else if(texto.match(letrasMayusculas) != texto.match(letrasMayusculas)){ //Validamos que no contenga letras mayusculas

        alert("No puede contener letras mayusculas"); //Arrojamos una alerta si se cumple la condición

    } else if(texto.match(carEspecial) != texto.match(carEspecial)){ //Validamos que no contenga caracteres especiales

        alert("No puede contener caracteres especiales"); //Arrojamos una alerta si se cumple la condición

    } else { 

        desencriptar(texto); // Llamamos a nuestra funcion de encriptar

    }

}

function desencriptar(texto){

    var textoDesencriptado = "";

    textoDesencriptado = texto.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

    alert("El mensaje desencriptado es: " + textoDesencriptado);

}
