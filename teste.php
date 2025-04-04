<?php
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'unicesumar.gdg@gmail.com';
    $mail->Password = 'unicesumargdg2025';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('unicesumar.gdg@gmail.com', 'Teste');
    $mail->addAddress('unicesumar.gdg@gmail.com');
    $mail->Subject = 'Teste de e-mail';
    $mail->Body = 'Isso é um teste';

    $mail->send();
    echo 'E-mail enviado com sucesso!';
} catch (Exception $e) {
    echo "Erro: {$mail->ErrorInfo}";
}
?>