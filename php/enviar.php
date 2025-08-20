<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "la_petit_rose";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obtém os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$pedido = $_POST['pedido'];
$data_entrega = $_POST['data_entrega'];
$hora_pedido = $_POST['hora_pedido'];
$observacoes = $_POST['observacoes'];
// Prepara e vincula a declaração SQL
$stmt = $conn->prepare("INSERT INTO pedidos (nome, email, pedido, data_entrega, hora_entrega, observacoes) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $nome, $email, $pedido, $data_entrega, $hora_pedido, $observacoes);

// Executa a declaração
if ($stmt->execute()) {
    echo "Pedido enviado com sucesso!";
} 
else {
    echo "Erro ao enviar o pedido: " . $stmt->error;
}

$dataAtual = date("Y-m-d");
if (strtotime($data_entrega) < strtotime($dataAtual)) {
    die("A data de entrega deve ser hoje ou futura.");
}
// Verifica se a hora do pedido é válida
if (!preg_match("/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/", $hora_pedido)) {
    die("A hora do pedido deve estar no formato HH:MM.");
}
// Fecha a declaração e a conexão
$stmt->close();
$conn->close();
?>