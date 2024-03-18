<?php
if (isset($_POST['send'])) {
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $name = ($_POST['name']);
        $email = ($_POST['email']);
        $message = ($_POST['message']);

        $header = "From: yon.palac@gmail.com" . "\r\n";
        $header.= "Reply-to: yon.palac@gmail.com" . "\r\n";
        $header.= "X-Mailer: PHP/" . phpversion();
        $maill = @mail($email,$name,$message,$header)
        if ($mail) {
            echo "<h4>¡email enviado!</h4>"
        }
    }
}