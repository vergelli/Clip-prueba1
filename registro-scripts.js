/* Scripts de Registro*/
    
function registrado(){

    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var contrasena = document.getElementById("exampleInputPassword1");
    var email = document.getElementById("exampleInputEmail1");

    var email_s = email.value

    if (nombre.value != "" && apellido.value != "" && contrasena.value != "" && email.value != ""){
        
        if (email_s.indexOf("@") == -1){
            
            document.getElementById("aviso").innerHTML = 
            `<div class="alert alert-warning">
                <strong>Caracteres incorrectos<br></strong> El email debe tener @ </a>.
            </div>`

        }
        else{

            document.getElementById("aviso").innerHTML = 
            `<div class="alert alert-success">
                <strong>Registro completado!</strong>.
            </div>`
            ;
        }
    }
    else{

        document.getElementById("aviso").innerHTML = `
    <div class="alert alert-danger">
        <strong>Campos de registro vacios<br></strong>No se detectaron valores en los campos de registro
    </div>`;
    }


}
