

document.getElementById("botonE").onclick = validar; //Accion que llama a la funcion validar, una vez que se haga clic en el botón

function validar(){ //Declaración de la función que nos servirá para validar los parametros del texto

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

        encriptar(texto); // Llamamos a nuestra funcion de encriptar

    }

}

function encriptar(texto){ //Declaramos la función de encriptar

    var mensajeEncriptado = ""; //Declaramos una variable vacia, será la que contendrá el texto
    var encriptadoEnProceso; //Declaramos una variable vacia, será la que contendrá de forma temporal el texto

        for(var i = 0; i < texto.length; i++){ //Declaramos un ciclo FOR en el cual le indicamos que debe de recorrer todo el texto hasta que nuestro indice sea mayor a la longitud del string del campo de texto

            if (texto[i] == "a") { //Declaramos una validación if donde preguntamos si la letra donde estamos posicionados es 'a'

                var encriptadoEnProceso = texto[i].replace("a","ai",); //Indicamos que en nuestra variable se guarde el remplazo de nuestra letra por la codificación que se nos brindo
                mensajeEncriptado = mensajeEncriptado + encriptadoEnProceso; //Indicamos que dentro de nuestra variable donde se irá guardando el mensaje encriptado se guarde la sustitución de nuestra letra

                } else if (texto[i] == "e") { //Declaramos una validación if donde preguntamos si la letra donde estamos posicionados es 'e'

                        var encriptadoEnProceso = texto[i].replace("e","enter"); //Indicamos que en nuestra variable se guarde el remplazo de nuestra letra por la codificación que se nos brindo
                        mensajeEncriptado = mensajeEncriptado + encriptadoEnProceso; //Indicamos que dentro de nuestra variable donde se irá guardando el mensaje encriptado se guarde la sustitución de nuestra letra

                    }   else if (texto[i] == "i"){ //Declaramos una validación if donde preguntamos si la letra donde estamos posicionados es 'i'

                            var encriptadoEnProceso = texto[i].replace("i","imes"); //Indicamos que en nuestra variable se guarde el remplazo de nuestra letra por la codificación que se nos brindo
                            mensajeEncriptado = mensajeEncriptado + encriptadoEnProceso; //Indicamos que dentro de nuestra variable donde se irá guardando el mensaje encriptado se guarde la sustitución de nuestra letra

                        }       else if(texto[i] == "o"){ //Declaramos una validación if donde preguntamos si la letra donde estamos posicionados es 'o'

                                    var encriptadoEnProceso = texto[i].replace("o","ober"); //Indicamos que en nuestra variable se guarde el remplazo de nuestra letra por la codificación que se nos brindo
                                    mensajeEncriptado = mensajeEncriptado + encriptadoEnProceso; //Indicamos que dentro de nuestra variable donde se irá guardando el mensaje encriptado se guarde la sustitución de nuestra letra

                                }   else if(texto[i] == "u"){ //Declaramos una validación if donde preguntamos si la letra donde estamos posicionados es 'u'

                                        var encriptadoEnProceso = texto[i].replace("u","ufat"); //Indicamos que en nuestra variable se guarde el remplazo de nuestra letra por la codificación que se nos brindo
                                        mensajeEncriptado = mensajeEncriptado + encriptadoEnProceso; //Indicamos que dentro de nuestra variable donde se irá guardando el mensaje encriptado se guarde la sustitución de nuestra letra

                                    }   else {
                                            mensajeEncriptado = mensajeEncriptado + texto[i]; //En caso de que nuestra letra donde estamos posicionados no sea una vocal, pasamos la letra directo a nuestra variable donde se va guardando nuestro mensaje
                                        }

        } // Fin del ciclo FOR

    alert("La encriptación es: " + mensajeEncriptado); // Mostramos el mensaje encriptado

} // Cierre de nuestra funcion
