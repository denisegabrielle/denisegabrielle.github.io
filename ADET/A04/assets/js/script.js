var plants = [
    {
        "category": "Indoor Plants",
        "img": "ind.png",
        "contents": [
            {
                "isAvailable": true,
                "name": "Bonsai Money Plant",
                "scientificName": "Pachira aquatica",
                "code": "BNS-MP",
                "sizes": [
                    {
                        "name": "Extra-Small",
                        "img": "bns-xs.webp",
                        "code": "XS",
                        "price": "300",
                        "potDetails": [
                            {
                                "potName": "Ecopot",
                                "potCode": "ECPT",
                                "potType": "Ecopot Amsterdam Mini 8",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "15 to 30 cm wide, 5 to 15 cm deep",
                                "potColor": "Taupe"
                            }
                        ],
                        "tags": "Mini",
                        "heightCm": 12,
                        "dimensions": "8x8x12 cm",
                        "weightGrams": 350,
                        "color": "Light Green Leaves with Tiny Trunk",
                        "lightRequirement": "Bright Indirect Light ",
                        "wateringFrequency": "10-14 days"
                    },
                    {
                        "name": "Medium",
                        "img": "bns-m2.webp",
                        "code": "MD",
                        "price": "1700",
                        "potDetails": [
                            {
                                "potName": "Ecopot",
                                "potCode": "ECPT",
                                "potType": "Ecopot Amsterdam 20",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 60,
                        "dimensions": "50 cm",
                        "weightGrams": 2000,
                        "color": "Deep green",
                        "lightRequirement": "Bright Indirect Light ",
                        "wateringFrequency": "10-14 days"
                    },
                    {
                        "name": "Medium",
                        "img": "bns-np-md.webp",
                        "code": "MD",
                        "price": "1000",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "28x25x10 cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "Tall, MediumBonsai, 2ftBonsai, IndoorPlant",
                        "heightCm": 76.2,
                        "dimensions": "76.2x50x25 cm",
                        "weightGrams": 5500,
                        "color": "Deep green",
                        "lightRequirement": "Direct Morning Sun",
                        "wateringFrequency": "Every 10-14 days"
                    }











                ]
            }
        ]
    },
    {
        "category": "Outdoor Plants",
        "img": "out.png",
        "contents": [
            {

            }
        ]
    },
    {
        "category": "Succulents Plants",
        "img": "scc.png",
        "contents": [
            {

            }
        ]
    },
    {
        "category": "Cacti Plants",
        "img": "cacti.png",
        "contents": [
            {

            }
        ]
    },
    {
        "category": "Flowering Plants",
        "img": "flw.png",
        "contents": [
            {

            }
        ]
    },
    {
        "category": "Foliage Plants",
        "img": "flg.png",
        "contents": [
            {

            }
        ]
    },
    {
        "category": "Herbs Plants",
        "img": "hrbs.png",
        "contents": [
            {

            }
        ]
    } 
]

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    plants.forEach((plant, index) => {
        categoriesContainer.innerHTML +=
            `<div class="card categoryCard d-flex justify-content-center me-2">
                <div onclick="loadPlants('`+ index + `')" class="categoryCard p-3 d-flex justify-content-center ">
                    <span><img class="mx-2 categoryImg" src="assets/img/`+ plant.img + `"></span>
                    <span class="category mx-2 text-start">`+ plant.category + `</span>
                </div>
            </div>
            `
    });
}

function loadPlants(categoryIndex) {
    var mainContainer = document.getElementById("mainContainer");
    var hideLogo = document.getElementById("logo");
    hideLogo.style.display = "none";

    mainContainer.innerHTML = "";

    plants[categoryIndex].contents.forEach((content) => {
        content.sizes.forEach((size) => {
            mainContainer.innerHTML += `
                <div class="card plantCard d-flex justify-content-center me-2 my-2">
                    <div onclick="addToReceipt('`+ size.price + `','` + content.code + size.code + ' ' +size.potDetails[0].potCode +`')" class="plantCard d-flex flex-column align-items-center justify-content-center rounded-4">
                        <img class="plantImg  rounded-4" src="assets/img/`+ size.img + `">
                        <p class="plant mt-3 p-3">`+ content.name + ' ' + size.code + ' in ' + size.potDetails[0].potName + `</p>
                    </div>
                </div>
            `;
        });
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




loadCategories();