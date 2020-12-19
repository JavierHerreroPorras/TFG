 <?php echo $_POST['usuario']; ?>;

<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

print "$_POST['usuario']";

if($usuario === '' || $pass=== ''){
    echo json_encode('error');
}else{
    echo json_encode('Correcto: <br>Usuario:'.$usuario.'<br>Pass:'.$pass);
}

?>
