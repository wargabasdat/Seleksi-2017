<?php
header('Content-type: application/javascript');
$host = "localhost";
$user = "root";
$password = "";
$database = "restaurant";
$table = "xml";
$filepath = "/Applications/XAMPP/xamppfiles/htdocs/project1/datajson.json";


$connection = mysqli_connect($host, $user, $password, $database);

$_GET['callback_test'] = 'callback_test';

$sql = "select * from xml";
$result = mysqli_query($connection, $sql);

$geojson = array(
	'type' => 'FeatureCollection',
	'features' => array()
	);

while($row = mysqli_fetch_assoc($result)) {
	unset($row['x']);
	unset($row['y']);
	$feature = array(
		'type' => 'Feature',
		'geometry' => array(
			'type' => 'Point',
			'coordinates' => array((float)$row['longitude'], (float)$row['latitude'])
			),
		'properties' => array(
			'name' => $row['name'],
			'address' => $row['address'],
			'phone' => $row['phone']
			)
		);
	array_push($geojson['features'], $feature);
};


mysqli_close($connection);

if(isset($_GET['callback_test'])) {
	$datajson =  $_GET['callback_test']."(".json_encode($geojson, JSON_PRETTY_PRINT).');';
}


if(file_put_contents($filepath, $datajson));


?>