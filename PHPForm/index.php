<?php 
$classes=['email'=>'',"account"=>'','password1'=>'','password2'=>''];
$email='';
$account='';
$password='';
$confirmPassword='';
$emailClass="";
$accountClass="";
$passwordClass="";
if(isset($_GET['submit'])){
    if(preg_match('/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/',$_GET['email'])){
        $email=$_GET['email'];
        $classes['email']="correct";
        $emailClass="";
    }else{
        $classes['email']="incorrect";
        $emailClass="visible";
    }
    if(preg_match('/^[a-zA-Z0-9\.\-_]{4,10}$/',$_GET['account'])){
        $account=$_GET['account'];
        $classes['account']="correct";
        $accountClass="visible";
    }else{
        $classes['account']="incorrect";
        $accountClass="";
    }
    if(preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/',$_GET['password'])){
        $password=$_GET['password'];
        $classes['password1']="correct";
        $passwordClass="visible";
    }else{
        $classes['password1']="incorrect";
        $passwordClass="";
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Registration Form</title>
</head>
<body>
<div class="app">
            <div >
            <form class="app-form" action="index.php" method="GET" id="form">
                <h1>e-mail adress</h1><input class=<?php  echo $classes['email'] ?> id="email" name="email" type="text" value="<?php echo $email ?>"/><div  class="tooltip">Please enter correct email adress</div>
                <h1>account name</h1><input  class=<?php  echo $classes['account'] ?> id="ac-name" name="account" type="text" value="<?php echo $account ?>"/><div id="<?php echo $accountClass ?>" class="tooltip">Username must consist of 4-10 characters which are either digits, letters or -_.</div>
                <h1>password</h1><input  class=<?php  echo $classes['password1'] ?> id="password" name="password" type="password" value="<?php echo $password ?>"/><div id="<?php echo $passwordClass ?>" class="tooltip">Password must consist of 8-13 letters, cointain: one upper and lower case letter, one digit, one special character</div>
                <button type="submit" name="submit">Submit</button>
            </form>
            </div>
            </div>
</body>
</html>