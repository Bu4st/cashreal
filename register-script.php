<?php
require 'config.php';







$duplicate = mysqli_query($conn , "SELECT * FROM users WHERE username = '$username' OR email = '$email'");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if(mysqli_num_rows($duplicate) > 0) {

    echo
    "<script> alert('Istnieje już konto z taką nazwą użytkownika lub mailem') </script>; ";


} else {
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {

    echo "Zarejestrowano pomyślnie";

}
 else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}



$conn->close();

?>