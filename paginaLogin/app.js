
 //Datos para acceder 
  var emailCorrecto = 'correo@gmail.com'
  var contraseñaCorrecta = 'contraseña123'


function pswValido() {
    var psw = document.getElementById('password').value;
    var long = psw.length; 

    if (long < 8) { 
        var isTrue = true;
        return isTrue;
 
    }
}

function emailValido(email) {
    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);

}


function login() {
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessageElement = document.getElementById('error');

    var error = '';
    
    if (email === '' || password === '') {
        error += 'Por favor, complete todos los campos.\n';

    }else{

        if (!emailValido(email)) {
            error += 'Ingrese un correo electrónico válido.\n';
            
        }else{
    
            if( email === emailCorrecto){
                    
                sessionStorage.setItem('userEmail', email);
        
            }else{
        
                error += 'Correo incorrecto.\n';
             }
        }
    
        if(pswValido()){
            error += 'Ingrese una contraseña válida.\n';
    
        }else{
    
            if(password !== contraseñaCorrecta){
                    
                error += 'Contraseña incorrecta .\n';
             }
    
        }


    }

     if (error !== '') {

        errorMessageElement.textContent = error;
    } else {
        
        errorMessageElement.textContent = '';

        window.location.href = 'datos_usuario.html';

               
    }
}



var persona = {};

function validarNombre(nombre) {

    var boolean;
    if(nombre.length >= 3 && nombre.length){
        boolean = true;
    }else{
        boolean = false;
    }
    return boolean;
}

function validarApellido(apellido) {

    var boolean;
    if(apellido.length >= 2 && apellido.length <= 30){
        boolean = true;
    }else{
        boolean = false;
    }
    return boolean;
    
}

function validarFechaNacimiento(fecha) {

    var fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    var boolean;
    if(fechaRegex.test(fecha)){
        boolean = true;
    }else{
        boolean = false;
    }

    return boolean;
}

var personas = [];

function validarDNI(dni) {
   
    var boolean;
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var letraIngresada = dni.charAt(8);

    var numero = parseInt(dni, 10);
    var letra = letras.charAt(numero % 23);

    if(letraIngresada.toUpperCase() == letra){
        boolean = true;
    }else{
        boolean = false;
    }

    return boolean;

}

function guardarDatos() {
    var nombre = document.getElementById('nombre').value;
    var primerApellido = document.getElementById('primer-apellido').value;
    var segundoApellido = document.getElementById('segundo-apellido').value;
    var dni = document.getElementById('dni').value;
    var fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    var errorMsg = document.getElementById('error-message');
    var correcto = document.getElementById('correcto');

    let error = '';

    if (!validarNombre(nombre)) {
        error += 'El nombre debe contener entre 3 y 30 caracteres.\n';
    }

    if (!validarApellido(primerApellido)) {
        error += 'El primer apellido debe contener entre 2 y 30 caracteres.\n';
    }

    if (!validarApellido(segundoApellido)) {
        error += 'El segundo apellido debe contener entre 2 y 30 caracteres.\n';
    }

    if (!validarFechaNacimiento(fechaNacimiento)) {
        error += 'El campo de fecha de nacimiento debe tener el formato dd/mm/AAAA.\n';
    }

    if (!validarDNI(dni)) {
        error += 'El DNI es inválido.\n';
    }

    if (error !== '') {
        errorMsg.textContent = error;
    } else {
        errorMsg.textContent = '';
        // Guardar los datos en el objeto "persona"
        persona = {
            nombre: nombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            dni: dni,
            fechaNacimiento: fechaNacimiento
        };

        personas.push(persona);
        correcto.textContent = 'Guardado correctamente';
        console.log(personas);
        
    }
}

function limpiarCampos() {
    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('primer-apellido').value = '';
    document.getElementById('segundo-apellido').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('fecha-nacimiento').value = '';
}

           

        
    
        


