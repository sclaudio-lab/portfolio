<?php
$WeatherSource = "http://api.openweathermap.org/data/2.5/onecall?lat=". $_GET["lat"] . "&lon=". $_GET["lng"]."&appid=ea551edc2725b13af560db236cdaa4ae"; //"lng"
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>