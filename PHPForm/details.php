<?php
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $conn = mysqli_connect('localhost', 'admin', 'test1234', 'sql_users');
    $sql = "SELECT * FROM users WHERE id = $id";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);

    mysqli_free_result($result);
    mysqli_close($conn);
}
if(isset($_POST['delete'])){
    $id = $_POST['id'];
    $conn = mysqli_connect('localhost', 'admin', 'test1234', 'sql_users');
    $sql = "DELETE FROM users WHERE id = $id";
    if(mysqli_query($conn, $sql)){
        header('Location: index.php');
    }else{
        echo 'query error';
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Details</title>
</head>

<body>
    <div class="app">
        <div class="data">
            <form action="details.php" method="POST">
                <h2>Users details</h2>
                <h1>
                    <input type="hidden" name="id" value="<?php echo $user['id'] ?>">
                    <?php echo $user['id']; ?>
                    <?php echo $user['account']; ?>
                    <?php echo $user['email']; ?>
                    <button type="submit" name="delete">Delete</button>
                </h1>
            </form>
        </div>
    </div>
</body>

</html>