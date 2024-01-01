window.addEventListener("load", () => {
    //Validación del login
    let formLogin = document.getElementById("formLogin");
    formLogin.addEventListener("submit",(event) => {
        let email = document.getElementById("email");
        let password = document.getElementById("password");
    
        if(!validarEmail(email.value)){
            //En caso de que se cumpla, devolvemos un mensaje indicando que el formato del email es incorrecto
            event.preventDefault();
            setTimeout(() => {
                
            }, 3000);
            let divErrores = document.getElementById("errores");
        }else if(!validarPassword(password.value)){
            //En caso de que se cumpla, devolvemos un error ya que no se cumple la longitud minima establecida en el registro
            event.preventDefault();
            setTimeout(() => {
                
            }, timeout);
        }
    });

    //validación registro usuario

    
});