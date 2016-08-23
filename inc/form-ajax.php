<?php
/**
 * Created by Vladimir Krasnoselskikh.
 * Date: 23.08.16
 */
// Использую сессию, чтобы предотвратить флудинг:

session_name('quickFeedback');
session_start();

// Если последняя форма была отправлена меньше 10 секунд назад,
// или пользователь уже послал 10 сообщений за последний час

if( $_SESSION['lastSubmit'] && ( time() - $_SESSION['lastSubmit'] < 10 || $_SESSION['submitsLastHour'][date('d-m-Y-H')] > 10 )){
    die('Пожалуста, подождите несколько минут, прежде чем отправить сообщение снова.');
}

$_SESSION['lastSubmit'] = time();
$_SESSION['submitsLastHour'][date('d-m-Y-H')]++;

//Проверка Поля ИМЯ
if(trim($_POST['name']) == '') {
    $hasError = true;
} else {
    $name = trim($_POST['name']);
}
//Проверка правильности ввода Телефона
if(trim($_POST['phone']) == '')  {
    $hasError = true;
} else {
    $phone = trim($_POST['phone']);
}


//Проверка правильности ввода Email
if(trim($_POST['email']) == '')  {
    $hasError = true;
} else {
    $email = trim($_POST['email']);
}

$comments = trim($_POST['comment']);



////Если ошибок нет, отправить email
if(!isset($hasError)) {
    $emailTo = 'i.sidorova@perspectiva.ru';
    $body = "Имя: $name \n\nТелефон: $phone \n\nE-mail: $email \n\nКомментарий:\n $comments";
    $subject = "Пользователь заказал показ";
    $headers = 'From: Лебединая бухта (ЛП) <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
    mail($emailTo, $subject, $body, $headers);
    $emailSent = true;
    echo '<div class="service-form-success"><div><span>&#10003</span>Спасибо, Ваша заявка принята!</div></div>';
}