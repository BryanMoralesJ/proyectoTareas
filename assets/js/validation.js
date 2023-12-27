let formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit",(event) => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(!validarEmail(email.toLowerCase().value)){
        //En caso de que se cumpla, devolvemos un mensaje indicando que el formato del email es incorrecto
        
    }else if(!validarPassword(password.value)){
        //En caso de que se cumpla, devolvemos un error ya que no se cumple la longitud minima establecida en el registro

    }else{
        //Si todo está correcto, inicia el proceso de login y se envian los datos al servidor
    }
});