<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  require_once('check_permission.php');

  $page = $_POST['page'];

  if (empty($_POST['id']) || empty($_POST['title']) || empty($_POST['content'])) {
    header('Location: ' . $page);
    die();
  }

  $id = $_POST['id'];
  $title = $_POST['title'];
  $content = $_POST['content'];

  $sql = "update joan821010_posts set title=?, content=? where id=?";
	$stmt = $conn->prepare($sql);
  $stmt->bind_param("ssi", $title, $content, $id);
  $result = $stmt->execute();

  if (!$result) {
  	die($conn->error);
  }

  header('Location: ' . $page);
?>





