<form method="post" action="send_notification.php">
Title<input type="text" name="title">
Message<input type="text" name="message">
<!--Icon path<input type="text" name="icon">-->
Token<input type="text" name="token">
<input type="submit" value="Send notification">
</form>

<?php
function sendNotification(){
    $url ="https://fcm.googleapis.com/fcm/send";

    $fields=array(
        "to"=>$_REQUEST['token'],
        "notification"=>array(
            "body"=>$_REQUEST['message'],
            "title"=>$_REQUEST['title'],
            "icon"=>$_REQUEST['icon'],
            "click_action"=>"https://shinerweb.com"
        )
    );

    $headers=array(
        'Authorization: AAAADj0N5o4:APA91bEodzgou9obLjAFG6znkQOMtWyLmIzy6RN4mG_yQdKIS29lHgi7GLuCz-pHIBhJDyaQ5OqyOfUuSBrD17n04QD6oeRidKJ1lPSDTRmYcTYJDftLyQyWmcVkBzX5F8KwffKzXvDS:APA91bGgY1EqDggzH-AJGEoOSjtGPjS-X6Hmvs1A9iX-RmlhDzuwh4GqlM2t0lDkjaCYs7vZgyXKiK_niP-5QuTjSaqYjy0uqLXpnItu0CSoDylnNk0_-mHBp25aGzD_ugh8Xzfodgcm',
        'Content-Type:application/json'
    );

    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
    $result=curl_exec($ch);
    print_r($result);
    curl_close($ch);
}
sendNotification();