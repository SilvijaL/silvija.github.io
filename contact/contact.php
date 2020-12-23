<?php
  $name = $_POST['name'];
  $surname = $_POST ['surname'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'yklnmfgh@gmail.com';

  $email_subject = "NASLOV";

  $email_body = "Name: $name. \n".
                "Surname: $surname.\n".
                "Email: $visitor_email.\n".
                "Message: $message.\n";

  $to = "yklnmfgh@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers = "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: contact.html");

  ?>