<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  $user = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  }

  if (!$user || $user['role'] !== 'ADMIN') {
    header('Location: index.php');
    die();
  }  


  $stmt = $conn->prepare("select * from joan821010_users");
  
  $result = $stmt->execute();
  if (!$result) {
  	die("Error:" . $conn->error);
  }

  $result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>後臺管理</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
  	<strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
  	
  	<section>
      <table border>
        <tr>
          <th>id</th>
          <th>role</th>
          <th>nickname</th>
          <th>username</th>
          <th>調整身分</th>
        </tr> 
	  	<?php
	  	  while ($row = $result->fetch_assoc()) {
	  	?>
		  	<tr>
          <td><?php echo escape($row['id']); ?></td>
          <td><?php echo escape($row['role']); ?></td>
          <td><?php echo escape($row['nickname']); ?></td>
          <td><?php echo escape($row['username']); ?></td>
          <td>
            <a href="handle_update_role.php?role=ADMIN&id=<?php echo escape($row['id']) ?>">管理員</a>
            <a href="handle_update_role.php?role=NORMAL&id=<?php echo escape($row['id']) ?>">使用者</a>
            <a href="handle_update_role.php?role=BANNED&id=<?php echo escape($row['id']) ?>">停權</a>
          </td>
        </tr>
		  <?php
		    }
		  ?>
      </table>
	  </section>
	  
  </main>
  
  
</body>
</html>