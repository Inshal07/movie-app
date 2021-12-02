<?php
include 'database.php';
$products = [];

$sql = "SELECT * FROM movies";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['id'] = isset($row['id']) ;
		$products[$i]['MovieName'] = $row['MovieName'];
		$products[$i]['ReleaseDate'] = $row['ReleaseDate'];
    $products[$i]['star'] = $row['star'];
    $products[$i]['movieURL'] = $row['movieURL'];
		$i++;
	}
	echo json_encode($products);
}
else
{
	http_response_code(404);
}
