<?php

require_once("config/config.php");

class Connection{
    private $hostDB = HOSTDB;
    private $userDB = USERDB;
    private $passDB = PASSDB;
    private $nameDB = NAMEDB;

    private static $conn;

    //Establecer la conexión con la bdd
    function getConnection(){
        try {
            Connection::$conn = new PDO("mysql:host=".$this->hostDB.";dbname=".$this->nameDB.";",$this->userDB,$this->passDB);
            //Configuramos la conexión para que lance exepciones cuando ocurra errores de PDO
            Connection::$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("<br/> ERROR" . $e->getMessage());
        }
        return Connection::$conn;
    }

    //Cerrar la conexión de la bdd
    function closeConnection(){
        Connection::$conn = null;
    }
}

?>