<?php

include "config.php";

$responde = file_get_contents("php://input");
$data = json_decode($responde, true);

$nome = $data["nome"];
$email = $data["email"];
$senha = $data["senha"];

$stmt = $conexao->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)");

$stmt->bind_param("sss", $nome, $email, $senha);

$stmt->execute();



if($stmt){
    echo json_encode(array("validacao" => true));
}else{
    echo json_encode(array("validacao" => false));
}