<?php

require_once("config/config.php");
require_once("language/lang.php");

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/functions.js"></script>
    <title><?= $config['tituloWeb']; ?></title>
</head>
<body>
    <main class="main">
        <header class="cabecera">
                <img src="assets/img/login.png" alt="Bmsolutions" class="cabecera_logo">
        </header>
        <div class="contenedor">
            <form action="" method="POST">
                <h1 class="contenedor_sesion">Login</h1>
                <input type="text" name="username" id="username" placeholder="Write your username here">
                <input type="password" name="password" id="password" placeholder="Write your password here">
                <label for="language">Select your language</label>
                <select name="lang">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select> <br/>
                <input type="submit" value="Submit" name="submit">
            </form>
        </div>
    </main>
</body>
</html>