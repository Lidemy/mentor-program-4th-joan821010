<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (empty($_GET['id']) || empty($_GET['role'])) {
    die();
  }

  $username = $_SESSION['username'];
  $id = $_GET['id'];
  $role = $_GET['role'];

  $sql = "update joan821010_users set role=? where id=?";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param("si", $role, $id); 

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: admin.php");
?>





