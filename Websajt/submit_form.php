<?php
// Replace with your email address
$to = 'studioacaofficial@gmail.com';

// Get form data and sanitize
$name = htmlspecialchars(trim($_POST['name']));
$email = htmlspecialchars(trim($_POST['email']));
$message = htmlspecialchars(trim($_POST['message']));

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    echo 'All fields are required.';
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Invalid email address.';
    exit;
}

// Prepare email
$subject = 'New Contact Form Submission';
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Send email
if (mail($to, $subject, $body, $headers)) {
    // Redirect to thank you page
    header('Location: thank_you.html');
    exit;
} else {
    echo 'Sorry, there was an error sending your message. Please try again later.';
}
?>
