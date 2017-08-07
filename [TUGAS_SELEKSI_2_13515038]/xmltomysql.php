<?php

$db = new PDO('mysql:host=localhost;dbname=restaurant','root','');
if($db) 
	echo 'db success</br>';

$xmldoc = new DOMDocument();
$xmldoc->load('restaurant.xml');

$xmldata = $xmldoc->getElementsByTagName('Placemark');
$xmlcount = $xmldata->length;

for($i=0; $i < $xmlcount; $i++) {
	$name = $xmldata->item($i)->getElementsByTagName('name')->item(0)->childNodes->item(0)->nodeValue;
	$address = $xmldata->item($i)->getElementsByTagName('address')->item(0)->childNodes->item(0)->nodeValue;
	$phone = $xmldata->item($i)->getElementsByTagName('phoneNumber')->item(0)->childNodes->item(0)->nodeValue;
	$coor = $xmldata->item($i)->getElementsByTagName('Point')->item(0)->childNodes->item(1)->nodeValue;

	$temp = explode(',',$coor);
	$latitude= floatval($temp[0]);
	$longitude = floatval($temp[1]);

	$stmt = $db->prepare("insert into xml values(?,?,?,?,?)");
	$stmt->bindParam(1,$name);
	$stmt->bindParam(2,$address);
	$stmt->bindParam(3,$phone);
	$stmt->bindParam(4,$latitude);
	$stmt->bindParam(5,$longitude);

	$stmt->execute();
	if($stmt)
		echo 'stmt success<br/>';
	print($name.'<br/>');
}

?>