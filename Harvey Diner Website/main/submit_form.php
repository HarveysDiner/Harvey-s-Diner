<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the inputs (basic validation)
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Create the email content
        $to = "info.harveysdiner@gmail.com"; // Your email address
        $subject = "New Contact Form Submission";
        $body = "You have received a new message from the contact form.\n\n" .
                "Name: $name\n" .
                "Email: $email\n\n" .
                "Message:\n$message";
        $headers = "From: no-reply@yourdomain.com"; // Set the sender email address

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "<p>Thank you for contacting us, $name. We will get back to you soon!</p>";
        } else {
            echo "<p>There was an issue with the submission. Please try again later.</p>";
        }
    } else {
        echo "<p>Please fill in all fields and provide a valid email address.</p>";
    }
} else {
    // Redirect to the contact page if the form is not submitted via POST
    header("Location: contact.html");
    exit();

    


}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "Thank you, $name. Your message has been received.";
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>
