<?php
  require_once('conn.php');

  function getUserFromUsername($username) {
    global $conn;
    
    $sql = sprintf(
      "select * from joan821010_users where username = '%s'",
      $username
    );

    $result = $conn->query($sql);

    if (!$result) {
      die($conn->error);
    }

    $row = $result->fetch_assoc();
    return $row; // username, id, nickname
  }
?>





