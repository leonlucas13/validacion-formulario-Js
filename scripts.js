const submitFunction = (event) => {
//     event.preventDefault() // prevee la actualizacion de la web
//    const valido = validarFormulario() // esto sera true o false

   if(!validarFormulario()){
    event.preventDefault();
   } else {
    event.preventDefault();
    alert(
        'Los datos enviados fueron: ' + '\n' +
        'Nombre: ' + document.getElementById('nombre').value + '\n' +
        'Apellido: ' + document.getElementById('apellido').value + '\n' +
        'Documento: ' + document.getElementById('documento').value + '\n' +
        'Email: ' + document.getElementById('email').value + '\n' +
        'Edad: ' + document.getElementById('edad').value + '\n' +
        'Actividad: ' + document.getElementById('actividad').value + '\n' +
        'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n' 
    )
   }

}

document.getElementById('formulario').addEventListener('submit', submitFunction) // escucha el envio del formulario



function validarFormulario(){

    //esto valida los campos de texto
    const campostexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    campostexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayuscula
        if(campo.value.length ==''){
            mostrarError(errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false;
        }else if (campo.value.length > 0 &&  campo.value.length < 3){
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false;
        } else{
            ocultarError(errorCampo);
            
        }
    })

    //esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')
    
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ //este regex valida que el formato del email sea valido.
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail,'¡Ingrese un correo electronico valido!');
        validacionCorrecta= false;       

    }

    //Validacion de edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if(edad.value < 18 ){
        mostrarError(errorEdad,'¡Debes ser mayo de 18 años para registrarte!');
        validacionCorrecta= false;
    }else{
        ocultarError(errorEdad)
    }

    //validacion de la activadad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor, selecciona una actividad');
        validacionCorrecta=false;
    }else{
        ocultarError(errorActividad);
    }

    //validacion de Nivel Estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de Estudio');
        validacionCorrecta=false;
    }else{
        ocultarError(errorNivelEstudio);
    }
    
    //Validar terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos,'¡Debes Aceptar los Terminos y Condiciones!')
        validacionCorrecta=false;
    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta // esto dira si el formulario completo esta correcto o no



}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento, mensaje) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}