<?php

  $dbHost = '127.0.0.1:3306',
  $dbUsername = 'root',
  $dbPassword = '',
  $dbName 'new connection 1'

    $conexao = new mysqli($dbHost, $dbPassword, $dbName, $dbUsername)
     if($conexao->connect_errno)
     {
        echo "Erro"
     }
     else
     {
        echo "Conexão concluida com sucesso!"
     }
?>