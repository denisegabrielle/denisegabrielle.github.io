var categories = [];
var plants = [];

const getAllCategories = async () => {
    fetch(
        'http://localhost/MyProjects/Portfolio/ADET/A06/categories.php'
    )
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
}

const getAllPlants = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    fetch('http://localhost/MyProjects/Portfolio/ADET/A06/plants.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
    .then(response => response.json())
    .then(data => {
        plants = data;
        loadPlants();
    })
};

getAllCategories();

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach((category) => {
        categoriesContainer.innerHTML +=
            `<div class="card categoryCard d-flex justify-content-center me-2">
                <div onclick="getAllPlants('`+ category.categoryID + `')" class="categoryCard p-3 d-flex justify-content-center ">
                    <span><img class="mx-2 categoryImg" src="assets/img/`+ category.img + `"></span>
                    <span class="category mx-2 text-start">`+ category.name + `</span>
                </div>
            </div>
            `
    });
}

function loadPlants(categoryID) {
    var mainContainer = document.getElementById("mainContainer");
    var hideLogo = document.getElementById("logo");
    hideLogo.style.display = "none";

    mainContainer.innerHTML = "";

    plants.forEach(plant =>  {
            mainContainer.innerHTML += `
                <div class="card plantCard d-flex justify-content-center me-2 my-2">
                    <div onclick="addToReceipt('`+ plant.sizePrice + `','` + plant.plantCode + '-' + plant.sizeCode + ' ' + plant.potCode + `')" class="plantCard d-flex flex-column align-items-center justify-content-center rounded-4">
                        <img class="plantImg  rounded-4" src="assets/img/`+ plant.sizeImage + `">
                        <p class="plant mt-2 p-3">`+ plant.plantName + ' ' + plant.sizeCode + ' in ' + plant.potName + `</p>
                    </div>
                </div>
            `;
    });
}

function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;

    receiptContainer.innerHTML += `
      <div class="d-flex flex-row justify-content-between">
        <div><small>`+ code + `</small></div>
        <div><small>`+ price + `</small></div>
      </div>
    `;
}

function printReceipt(receiptContainer) {
    var printReceipt = document.getElementById(receiptContainer).innerHTML;

    document.body.innerHTML = printReceipt;

    var hidePrintBtn = document.getElementById("print");
    hidePrintBtn.style.display = "none";
    var showBackBtn = document.getElementById("back");
    showBackBtn.style.display = "block";

    window.print();

    showBackBtn.addEventListener('click', function (event) {
        window.location.href = 'index.html';
    });
}