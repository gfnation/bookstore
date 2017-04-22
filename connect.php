<!DOCTYPE html>
<head>
</head>
<body>
<? php
  $db = mysqli_connect('127.0.0.1', 'root', '', 'bookstore');
  if(!$db)
  {
    echo "Error connecting" . PHP_EOL;
    exit;
  }
  echo "success" . PHP_EOL;

  myaqli_close($db);
 ?>
</body>
</html>
