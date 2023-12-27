function validarEmail(email){
    //Comprobamos que el email corresponda con el siguiente formato: NAME@DOMAIN.TLD
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regex)){
        return true;
    }

    return false;
}

function validarPassword(password){
    //Comprobamos que la contraseña contenga una longitud de entre 8 a 20 y que cumpla los requisitos de un numero, una mayúscula y una minúscula
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(password.match(regex)){
        return true;
    }

    return false;
}

function validarTelefono(telefono){
    //Comprobamos que el teléfono tenga 9 digitos.
    let regex = /^\d{9}/; 
    if(telefono.match(regex)){
        return true;
    }

    return false;
}

function validarNombre(nombre){
    //Validamos que al introducir el nombre únicamente sean letras del alfabeto INGLÉS y no números, también parseamos la letra ñ
    let regex = /^[A-Z]+$/i;
    let nombreLimpio = nombre.toLowerCase().replace("ñ","n");
    if(nombreLimpio.match(regex)){
        return true;
    }

    return false;
}

function validarApellidos(apellidos){
    //Validamos que al introducir el apellido únicamente sean letras del alfabeto INGLÉS y no números, también parseamos la letra ñ
    let regex = /^[A-Z]+$/i;
    let apellidosLimpios = apellidos.toLowerCase().replace("ñ","n");
    if(apellidosLimpios.match(regex)){
        return true;
    }

    return false;
}