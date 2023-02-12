<!DOCTYPE html>

<html>
    
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <link rel="stylesheet" href="css/main.css">
    </head>
    
    <body>
        
        <div class = "base-processa animated slideInRight slow">
        
            <?php

            
            $nome = $_POST['nome'];
            $email = $_POST['email'];  
            $interesse = $_POST['interesse'];  
            $mensagem = $_POST['msg']; 
            
            $envio = "cmapereira@gmail.com";
            $destino = "cmapereira@gmail.com";
            $assunto = "Website Message";
            $corpo = "Nome: $nome\n\n";
            $corpo .= "E-mail: $email\n\n";
            $corpo .= "Interesse: $interesse\n\n";
            $corpo .= "Mensagem:\n\n$mensagem";

            $headers = "MINE-Version: 1.1";
            $headers .= "Content-Type: text/html; charset=UTF-8\n";
            $headers .= "From:cmapereira@gmail.com\n";
            $headers .= "Cc:claudio@hidromapper.com.br\n";  
            $headers .= "Return-Path:cmapereira@gmail.com\n";


            if (mail($destino, $assunto, $corpo, $headers, "-r". $envio)){
                //echo "SUCCESS<br><br>";
                //echo "<a href = 'index.html' target='_self'>BACK HOME</a>";
                header("Location: index.html");
            }else{ 
                echo "FAILED TRY AGAIN";
            }

            ?>

        </div>

    </body>
</html>