<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (empty($_POST['title']) || empty($_POST['content'])) {
    header("Location: create_post.php?errCode=1");
    die();
  }

  $username = $_SESSION['username'];
  $title = $_POST['title'];
  $content = $_POST['content'];
  
  $sql = "insert into joan821010_posts(username, title, content) values(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $username, $title, $content);

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: admin.php");
?>





