<?php

$page = "overview";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "overview":
            $page = "overview";
            break;
        case "productDetails":
            $page = "productDetails";
            break;
        case "contactDetails":
            $page = "contactDetails";
            break;
        default:
            header("Location: ?page=overview");
            break;
    }
} else {
    header("Location: ?page=overview");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MVC architecture</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link href="https://fonts.cdnfonts.com/css/rangile" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/instrument-sans" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" type="image/png" href="assets/img/logo.png">
</head>

<body>
    <nav class="navbar shadow">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="assets/img/logo.png" alt="Bootstrap" width="60" height="60">
            </a>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-10 col-md-10 col-lg-10">
                <div class="main-content row g-3 p-3">
                    <?php include("shared/" . $page . ".php"); ?>
                </div>
            </div>

            <div class="col-12 col-sm-2 col-md-2 col-lg-2">
                <div class="sidebar card p-3">
                    <a href="#"><div class="my-3"><i class="sidebar-icon bi bi-house"></i><span class="sidebar-text text-start ps-3 ps-sm-3">Home</span></div></a>
                    <hr>
                    <a href="#"><div class="my-3"><i class="sidebar-icon bi bi-basket3"></i><span class="sidebar-text text-start ps-3 ps-sm-3">Order Now</span></div></a>
                    <hr>
                    <a href="#"><div class="my-3"><i class="sidebar-icon bi bi-envelope"></i><span class="sidebar-text text-start ps-3 ps-sm-3">Contact Us</span></div></a>
                </div>
            </div>

        </div>
    </div>
</body>

</html>