/*Scripts*/

var i = 0

function contador()
{
    i = i + 1;
}

function limpiar() {
    document.getElementById("acertijo_respuesta_input").value = "";
}

function validar(){

    var r = document.getElementById("acertijo_respuesta_input");

    if (r.value == "102000" || r.value == "102.000"){

        document.getElementById("value").innerHTML = "CORRECTO";
        document.getElementById("acertijo_boton_summit").disabled = true;
        limpiar(); 

    }
    else {
        var intentos = 3-i
        if ( intentos > 0){
            if(intentos==3){
                limpiar();
                document.getElementById("value").innerHTML = `INCORRECTO<br> te quedan ${intentos} intentos<br>Pista 1: ¿Los casos positivos reportados reflejan los infectados al dia?`;
            }
            if(intentos==2){
                limpiar();
                document.getElementById("value").innerHTML = `INCORRECTO<br> te quedan ${intentos} intentos<br>Pista 2: ¿La gente que fallecio sigue infectada?`;
            }
            if(intentos==1){
                limpiar();
                document.getElementById("value").innerHTML = `INCORRECTO<br> te quedan ${intentos} intentos<br>Pista 3: Use la calculadora`;
            }
        }
        else{
            document.getElementById("value").innerHTML = "No le quedan mas intentos";
            document.getElementById("acertijo_boton_summit").disabled = true;
        }
    }

}




