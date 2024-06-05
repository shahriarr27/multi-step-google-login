<?php

/* https://api.telegram.org/bot5749360485:AAH8dCAsTxcmCSPCUM8Xauw6hjKRv0Fm3bs/getUpdates,
 XXXXXXXXXXXXXXXXXXXXXXX - Tokeningizni xxx joyiga qo'yib internatga quying */

// $name = $_POST['user_name'];
// $phone = $_POST['user_phone'];
$email = $_POST['user_email'];
// $comment = $_POST['user_comment'];
$token = "5749360485:AAH8dCAsTxcmCSPCUM8Xauw6hjKRv0Fm3bs";
$chat_id = "5651241356";
$arr = array(
  // '💁‍♂️ FAFA: ' => $name,
  // '📱 MAKHA: ' => $phone,
  '🌐 Email: ' => $email,
  // '📜 Отзыв клиента: ' => $comment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "successfully sent message";
} else {
  echo "Error";
}
?>