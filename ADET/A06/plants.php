<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include("connect.php");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
  case 'POST':
    handlePost($pdo,$input);
    break;
  case 'GET':
    handleGet($pdo);
    break;
  default:
    echo json_encode(['message' => 'Invalid request method']);
    break;
}

function handleGet($pdo)
{
  $sql = "SELECT * FROM plants";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);
}

function handlePost($pdo, $input)
{
  $sql = "SELECT p.name AS plantName, p.code AS plantCode, sd.img AS sizeImage, s.code AS sizeCode, sd.price AS sizePrice, pd.code AS potCode, pd.name AS potName 
    FROM plants p 
    JOIN categories c ON p.categoryID = c.categoryID 
    JOIN sizesdetails sd ON p.plantID = sd.plantID 
    JOIN sizes s ON s.sizeID = sd.sizeID 
    JOIN potDetails pd ON sd.potDetailsID = pd.potDetailsID 
    WHERE p.categoryID = :categoryID";
  $stmt = $pdo->prepare($sql);
  $stmt->execute(['categoryID' => $input['categoryID']]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);
}
?>