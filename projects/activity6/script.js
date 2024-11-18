var eCnames = ["Coq au Vin", "Gnocchi Burro e Salvia", "Lamb Chop Provencale", "Minestrone", "Osso Bucco alla Milanese", "Pepperonata", "Pesce all’acqua pazza", "Pizza Neapolitana", "Salad Nicoise", "Shrimp Bisque", "Soupe a l’oignon", "Tomato Provencale", "Torta Barozzi", "Poached Pear in Red Wine", "lle Flottante"];
var eCpics = ["foodImgs/EuropeanCuisine/Coq au Vin.jpg", "foodImgs/EuropeanCuisine/Gnocchi Burro e Salvia.jpg", "foodImgs/EuropeanCuisine/Lamb Chop Provencale.jpg", "foodImgs/EuropeanCuisine/Minestrone.jpg", "foodImgs/EuropeanCuisine/Osso Bucco alla Milanese.jpg", "foodImgs/EuropeanCuisine/Pepperonata.jpg", "foodImgs/EuropeanCuisine/Pesce all’acqua pazza.jpg", "foodImgs/EuropeanCuisine/Pizza Neapolitana.jpg", "foodImgs/EuropeanCuisine/Salad Nicoise.jpg", "foodImgs/EuropeanCuisine/Shrimp Bisque.jpg", "foodImgs/EuropeanCuisine/Soupe a l’oignon.jpg", "foodImgs/EuropeanCuisine/Tomato Provencale.jpg", "foodImgs/EuropeanCuisine/Torta Barozzi.jpg", "foodImgs/EuropeanCuisine/Poached Pear in Red Wine.jpg", "foodImgs/EuropeanCuisine/lle Flottante.jpg"];

for (var i = 0; i < eCnames.length; i++) {
    var myContainer = document.getElementById("cardContainerEc");
    myContainer.innerHTML +=
        `<div class="col-xl-3 col-md-4 col-sm-6 col-12 my-3">
                           <div class="image-wrapper" id="eC${i}" onmouseenter="addShadow('eC${i}')" onmouseleave="removeShadow('eC${i}')" onclick="openLightbox(${i}, 'european')">
                               <img src="${eCpics[i]}" class="img-fluid" alt="${eCnames[i]}">
                               <h5 class="text-center mt-2"><b>${eCnames[i]}</b></h5>
                           </div>
            </div>`;
}

var aPnames = ["Spinach Dip with Bagutte", "Smoked Salmon Quiche", "Beef Tortilla Wrap", "Black Bean Spinach Quesadilla", "Chicken Alfredo", "Chicken Satay", "Chile con Queso with Nachos", "Chorizo Stuffed Mushroom", "Eggs Benedict", "Greek Chicken Kebab", "Herbed Cheese Spread", "Herbed Pikelets with Fruits and Cheese", "Kentucky Hot Brown Sandwich", "Pain Bagnat and Banh Mi", "Po Boy Sandwich", "Breaded Chicken & Chorizo with Raisin Compote", "Vegetarian Burger"];
var aPpics = ["foodImgs/Appetizer/Spinach Dip with Bagutte.jpg", "foodImgs/Appetizer/Smoked Salmon Quiche.jpg", "foodImgs/Appetizer/Beef Tortilla Wrap.jpg", "foodImgs/Appetizer/Black Bean Spinach Quesadilla.jpg", "foodImgs/Appetizer/Chicken Alfredo.jpg", "foodImgs/Appetizer/Chicken Satay.jpg", "foodImgs/Appetizer/Chile con Queso with Nachos.jpg", "foodImgs/Appetizer/Chorizo Stuffed Mushroom.jpg", "foodImgs/Appetizer/Eggs Benedict.jpg", "foodImgs/Appetizer/Greek Chicken Kebab.jpg", "foodImgs/Appetizer/Herbed Cheese Spread.jpg", "foodImgs/Appetizer/Herbed Pikelets with Fruits and Cheese.jpg", "foodImgs/Appetizer/Kentucky Hot Brown Sandwich.jpg", "foodImgs/Appetizer/Pain Bagnat and Banh Mi.jpg", "foodImgs/Appetizer/Po Boy Sandwich.jpg", "foodImgs/Appetizer/Breaded Chicken & Chorizo with Raisin Compote.jpg", "foodImgs/Appetizer/Vegetarian Burger.jpg"];

for (var i = 0; i < aPnames.length; i++) {
    var myContainer = document.getElementById("cardContainerAp");
    myContainer.innerHTML += `<div class="col-xl-3 col-md-4 col-sm-6 col-12 my-3">
                           <div class="image-wrapper" id="aP${i}" onmouseenter="addShadow('aP${i}')" onmouseleave="removeShadow('aP${i}')" onclick="openLightbox(${i}, 'appetizers')">
                               <img src="${aPpics[i]}" class="img-fluid" alt="${aPnames[i]}">
                               <h5 class="text-center mt-2"><b>${aPnames[i]}</b></h5>
                           </div>
            </div>`;
}

var pNames = ["Entremet", "Vegan Cheese Cake", "Tiramisu", "Matcha pata Choux", "Yoghurt Brownies", "Carrot Cake", "Pavlova", "Basque Gateaux"];
var pPics = ["foodImgs/Pastry/Entremet.jpg", "foodImgs/Pastry/Vegan Cheese Cake.jpg", "foodImgs/Pastry/Tiramisu.jpg", "foodImgs/Pastry/Matcha pata Choux.jpg", "foodImgs/Pastry/Yoghurt Brownies.jpg", "foodImgs/Pastry/Carrot Cake.jpg", "foodImgs/Pastry/Pavlova.jpg", "foodImgs/Pastry/Basque Gateaux.jpg"];

for (var i = 0; i < pNames.length; i++) {
    var myContainer = document.getElementById("cardContainerPastries");
    myContainer.innerHTML += `<div class="col-xl-3 col-md-4 col-sm-6 col-12 my-3">
                           <div class="image-wrapper" id="p${i}" onmouseenter="addShadow('p${i}')" onmouseleave="removeShadow('p${i}')" onclick="openLightbox(${i}, 'pastries')">
                               <img src="${pPics[i]}" class="img-fluid" alt="${pNames[i]}">
                               <h5 class="text-center mt-2"><b>${pNames[i]}</b></h5>
                           </div>
            </div>`;
}

function addShadow(id) {
    document.getElementById(id).classList.add("shadow");
}

function removeShadow(id) {
    document.getElementById(id).classList.remove("shadow");
}

function play(id) {
    document.getElementById(id).video.play("play");
}

function pause(id) {
    document.getElementById(id).video.pause("pause");
}

var display = "none";
function expandContentEc() {
    var cardContainerEc = document.getElementById("cardContainerEc");
    var btnExpand = document.getElementById("btnExpand");
    if (display === "none") {
        cardContainerEc.style.display = "flex";
        display = "block";
        btnExpand.innerHTML = "Close";
    } else {
        cardContainerEc.style.display = "none";
        display = "none";
        btnExpand.innerHTML = "See Photos";
    }
}

var display = "none";
function expandContentAp() {
    var cardContainerAp = document.getElementById("cardContainerAp");
    var btnExpandAp = document.getElementById("btnExpandAp");
    if (display === "none") {
        cardContainerAp.style.display = "flex";
        display = "block";
        btnExpandAp.innerHTML = "Close";
    } else {
        cardContainerAp.style.display = "none";
        display = "none";
        btnExpandAp.innerHTML = "See Photos";
    }
}

var display = "none";
function expandContentPastries() {
    var cardContainer = document.getElementById("cardContainerPastries");
    var btnExpand = document.getElementById("btnExpand");
    if (display === "none") {
        cardContainer.style.display = "flex";
        display = "block";
        btnExpand.innerHTML = "Close";
    } else {
        cardContainer.style.display = "none";
        display = "none";
        btnExpand.innerHTML = "See Photos";
    }
}

var currentIndex = 0;
var currentCategory = "";

var eCnames = ["Coq au Vin", "Gnocchi Burro e Salvia", "Lamb Chop Provencale", "Minestrone", "Osso Bucco alla Milanese", "Pepperonata", "Pesce all’acqua pazza", "Pesto Fettuccine", "Pizza Neapolitana", "Salad Nicoise", "Shrimp Bisque", "Soupe a l’oignon", "Tomato Provencale", "Torta Barozzi", "Poached Pear in Red Wine", "lle Flottante"];
var eCpics = ["foodImgs/EuropeanCuisine/Coq au Vin.jpg", "foodImgs/EuropeanCuisine/Gnocchi Burro e Salvia.jpg", "foodImgs/EuropeanCuisine/Lamb Chop Provencale.jpg", "foodImgs/EuropeanCuisine/Minestrone.jpg", "foodImgs/EuropeanCuisine/Osso Bucco alla Milanese.jpg", "foodImgs/EuropeanCuisine/Pepperonata.jpg", "foodImgs/EuropeanCuisine/Pesce all’acqua pazza.jpg", "foodImgs/EuropeanCuisine/Pesto fettuccine.jpg", "foodImgs/EuropeanCuisine/Pizza Neapolitana.jpg", "foodImgs/EuropeanCuisine/Salad Nicoise.jpg", "foodImgs/EuropeanCuisine/Shrimp Bisque.jpg", "foodImgs/EuropeanCuisine/Soupe a l’oignon.jpg", "foodImgs/EuropeanCuisine/Tomato Provencale.jpg", "foodImgs/EuropeanCuisine/Torta Barozzi.jpg", "foodImgs/EuropeanCuisine/Poached Pear in Red Wine.jpg", "foodImgs/EuropeanCuisine/lle Flottante.jpg"];
var aPnames = ["Spinach Dip with Bagutte", "Smoked Salmon Quiche", "Beef Tortilla Wrap", "Black Bean Spinach Quesadilla", "Chicken Alfredo", "Chicken Satay", "Chile con Queso with Nachos", "Chorizo Stuffed Mushroom", "Eggs Benedict", "Greek Chicken Kebab", "Herbed Cheese Spread", "Herbed Pikelets with Fruits and Cheese", "Kentucky Hot Brown Sandwich", "Pain Bagnat and Banh Mi", "Po Boy Sandwich", "Breaded Chicken & Chorizo with Raisin Compote", "Vegetarian Burger"];
var aPpics = ["foodImgs/Appetizer/Spinach Dip with Bagutte.jpg", "foodImgs/Appetizer/Smoked Salmon Quiche.jpg", "foodImgs/Appetizer/Beef Tortilla Wrap.jpg", "foodImgs/Appetizer/Black Bean Spinach Quesadilla.jpg", "foodImgs/Appetizer/Chicken Alfredo.jpg", "foodImgs/Appetizer/Chicken Satay.jpg", "foodImgs/Appetizer/Chile con Queso with Nachos.jpg", "foodImgs/Appetizer/Chorizo Stuffed Mushroom.jpg", "foodImgs/Appetizer/Eggs Benedict.jpg", "foodImgs/Appetizer/Greek Chicken Kebab.jpg", "foodImgs/Appetizer/Herbed Cheese Spread.jpg", "foodImgs/Appetizer/Herbed Pikelets with Fruits and Cheese.jpg", "foodImgs/Appetizer/Kentucky Hot Brown Sandwich.jpg", "foodImgs/Appetizer/Pain Bagnat and Banh Mi.jpg", "foodImgs/Appetizer/Po Boy Sandwich.jpg", "foodImgs/Appetizer/Breaded Chicken & Chorizo with Raisin Compote.jpg", "foodImgs/Appetizer/Vegetarian Burger.jpg"];
var pNames = ["Entremet", "Vegan Cheese Cake", "Tiramisu", "Matcha pata Choux", "Yoghurt Brownies", "Carrot Cake", "Pavlova", "Basque Gateaux"];
var pPics = ["foodImgs/Pastry/Entremet.jpg", "foodImgs/Pastry/Vegan Cheese Cake.jpg", "foodImgs/Pastry/Tiramisu.jpg", "foodImgs/Pastry/Matcha pata Choux.jpg", "foodImgs/Pastry/Yoghurt Brownies.jpg", "foodImgs/Pastry/Carrot Cake.jpg", "foodImgs/Pastry/Pavlova.jpg", "foodImgs/Pastry/Basque Gateaux.jpg"];

function openLightbox(index, category) {
    currentIndex = index;
    currentCategory = category;
    updateLightbox();
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";
}

function updateLightbox() {
    var lightboxImage = document.getElementById("lightboxImage");
    var caption = document.getElementById("caption");

    let images, names;

    if (currentCategory === "european") {
        images = eCpics;
        names = eCnames;
    } else if (currentCategory === "appetizers") {
        images = aPpics;
        names = aPnames;
    } else if (currentCategory === "pastries") {
        images = pPics;
        names = pNames;
    }

    lightboxImage.src = images[currentIndex];
    lightboxImage.alt = names[currentIndex];
    caption.innerHTML = names[currentIndex];
}

function handleKey(event) {
    if (event.key === "ArrowLeft") {
        prevImage();
    } else if (event.key === "ArrowRight") {
        nextImage(); 
    }
}

function keys() {
    document.addEventListener('keydown', handleKey);
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    document.removeEventListener('keydown', handleKey);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % (currentCategory === "european" ? eCnames.length : currentCategory === "appetizers" ? aPnames.length : pNames.length);
    updateLightbox();
    keys();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + (currentCategory === "european" ? eCnames.length : currentCategory === "appetizers" ? aPnames.length : pNames.length)) % (currentCategory === "european" ? eCnames.length : currentCategory === "appetizers" ? aPnames.length : pNames.length);
    updateLightbox();
    keys(); 
}

keys();

var colorMode = "light";
function changeColorMode() {
    var img = document.getElementById("darkMode");

    if (colorMode === "light") {
        document.getElementById("body").setAttribute("data-bs-theme", "dark");
        document.body.style.backgroundColor = '#3A2D28';

        img.src = "foodImgs/lightMode1.png";
        img.alt = "Light Mode";
        colorMode = "dark";
    } else {
        document.getElementById("body").setAttribute("data-bs-theme", "light");
        document.body.style.backgroundColor = '#EBE3DB';

        img.src = "foodImgs/darkMode1.png"; 
        img.alt = "Toggle Dark Mode";
        colorMode = "light";
    }
}