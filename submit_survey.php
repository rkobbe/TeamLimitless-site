<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve survey data
    $question1 = $_POST['question1'];
    // Retrieve other survey data...

   // Prepare email content
  $to = "reikobbe@gmail.com";
  $subject = "Survey Form Submission";
  $message = "Form data:\n\n";
  foreach ($formData as $key => $value) {
    $message .= "$key: $value\n";
  }

  // Send email
  $headers = "From: reikobbe@gmail.com"; // Your website's email address
  mail($to, $subject, $message, $headers);

    // Process the survey data (store in database, send emails, etc.)
    // For example, store in a database:
    $servername = "your_servername";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_dbname";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert survey data into a database (example)
    $sql = "INSERT INTO survey_data (question1) VALUES ('$question1')";
    // Execute SQL query
    if ($conn->query($sql) === TRUE) {
        echo "Survey data recorded successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>


