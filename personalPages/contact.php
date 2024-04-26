<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Compose email message
$to = 'nottage@simmons.edu'; // Replace with your email address
$subject = 'Contact Form Submission';
$body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

// Send email
if (mail($to, $subject, $body)) {
    echo 'success';
} else {
    echo 'error';
}
?>
