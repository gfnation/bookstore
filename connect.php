<!DOCTYPE html>
<html>
<head>
</head>
<body>
<? php
  $db = mysqli_connect('127.0.0.1', 'root', '', 'bookstore');
  if(!$db)
  {
    die("Conection failed");
  }
  echo "Connection Established";

  mysqli_close($db);
 ?>
</body>
</html>
