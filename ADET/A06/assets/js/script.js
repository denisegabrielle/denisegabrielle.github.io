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
                        "img": "bns-xs.png",
                        "code": "XS",
                        "price": "300",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam Mini 8",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "15 to 30 cm wide, 5 to 15 cm deep",
                                "potColor": "Taupe"
                            }
                        ],
                        "tags": "Mini",
                        "heightCm": 12,
                        "weightGrams": 350,
                        "color": "Light Green Leaves with Tiny Trunk",
                        "lightRequirement": "Bright Indirect Light ",
                        "wateringFrequency": "10-14 days"
                    },
                    {
                        "name": "Medium",
                        "img": "bns-m2.png",
                        "code": "MD",
                        "price": "1700",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam 20",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 60,
                        "weightGrams": 2000,
                        "color": "Deep green",
                        "lightRequirement": "Bright Indirect Light ",
                        "wateringFrequency": "10-14 days"
                    },
                    {
                        "name": "Medium",
                        "img": "bns-np-md.png",
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
                        "tags": "Tall",
                        "heightCm": 76.2,
                        "weightGrams": 5500,
                        "color": "Deep green",
                        "lightRequirement": "Direct Morning Sun",
                        "wateringFrequency": "Every 10-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Bucida",
                "scientificName": "Bucida buceras",
                "code": "BCD",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "bns-lg.png",
                        "code": "MD",
                        "price": "4800",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Oslo 35",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "35cm x 30.5cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 91.44,
                        "weightGrams": 7000,
                        "color": "Deep Green Leaves with Tiny Trunk",
                        "lightRequirement": "Bright Direct Light ",
                        "wateringFrequency": "10-14 days"
                    },
                    {
                        "name": "Medium",
                        "img": "bns-b-m.png",
                        "code": "MD",
                        "price": "2800",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": " 38cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Geometry Tree",
                        "heightCm": 100,
                        "weightGrams": 2000,
                        "color": "Green",
                        "lightRequirement": "Bright, Indirect Light",
                        "wateringFrequency": "Once a week, when the topsoil feels dry"
                    },
                    {
                        "name": "Large",
                        "img": "bns-b-m.png",
                        "code": "LG",
                        "price": "3800",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "34cm x 20cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Geometry Tree",
                        "heightCm": 122,
                        "weightGrams": 5000,
                        "color": "Green",
                        "lightRequirement": "Bright, Indirect to Partial Direct Light",
                        "wateringFrequency": "Once a week, or when topsoil feels dry"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Zenzi ZZ",
                "scientificName": "Zamioculcas zamiifolia",
                "code": "ZZ",
                "sizes": [
                    {
                        "name": "Extra-small",
                        "img": "zz-xs.png",
                        "code": "XS",
                        "price": "900",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Antwerp Mini 11",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "11.5cm x 10cm",
                                "potColor": "Gray"
                            }
                        ],
                        "tags": "Mini",
                        "heightCm": 30,
                        "weightGrams": 1200,
                        "color": "Glossy green",
                        "lightRequirement": "Low to medium indirect light",
                        "wateringFrequency": "Every 2-3 weeks"

                    },
                    {
                        "name": "Large",
                        "img": "zz-lg.png",
                        "code": "LG",
                        "price": "1900",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Antwerp Mini 11",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Gray"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 6.35,
                        "weightGrams": 200,
                        "color": "Glossy dark green",
                        "lightRequirement": "Direct Morning Sun",
                        "wateringFrequency": "Every 10-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Everfresh",
                "scientificName": "Pithecellobium confertum",
                "code": "EVRFRSH",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "ev-s.png",
                        "code": "S",
                        "price": "1700",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam 20",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Pure White"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 300,
                        "weightGrams": 5000,
                        "color": "Lush green",
                        "lightRequirement": "Direct Morning Sun",
                        "wateringFrequency": "Moderate; keep soil consistently moist but not soggy"
                    },
                    {
                        "name": "Medium",
                        "img": "ev-m.png",
                        "code": "MD",
                        "price": "3500",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "25cm x 17.5cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 106,
                        "weightGrams": 3000,
                        "color": "Vibrant green",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Moderate; water when top inch of soil is dry"
                    },
                    {
                        "name": "Large",
                        "img": "ev-l.png",
                        "code": "LG",
                        "price": "9500",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopot Oslo High 52",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "35cm x 51.5cm",
                                "potColor": "White Grey"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 122,
                        "weightGrams": 3000,
                        "color": "green",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Sensation Plant",
                "scientificName": "Spathiphyllum 'Sensation'",
                "code": "SNSTN",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "s-m.png",
                        "code": "MD",
                        "price": "1600",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Venice 2 20",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Brown"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 60,
                        "weightGrams": 4000,
                        "color": "deep green",
                        "lightRequirement": "low to medium indirect light",
                        "wateringFrequency": "once a week or when the topsoil is dry"
                    },
                    {
                        "name": "Large",
                        "img": "s-l.png",
                        "code": "LG",
                        "price": "4000",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Oslo 35",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "35cm x 30.5cm",
                                "potColor": "White Grey"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 91,
                        "weightGrams": 2500,
                        "color": "Green",
                        "lightRequirement": "Low to bright indirect light",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Peace Lily",
                "scientificName": "Spathiphyllum",
                "code": "PCLLY",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "lly-s.png",
                        "code": "S",
                        "price": "1000",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Venice 2 20",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 30,
                        "weightGrams": 800,
                        "color": "Dark green leaves with white spathes",
                        "lightRequirement": "Low to medium indirect light",
                        "wateringFrequency": "Once a week"
                    },
                    {
                        "name": "Extra-large",
                        "img": "lly-xl.png",
                        "code": "XL",
                        "price": "3300",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam 30",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "30cm x 25cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 60,
                        "weightGrams": 1500,
                        "color": "Dark green with white spathes",
                        "lightRequirement": "Low to moderate indirect light",
                        "wateringFrequency": "Once a week or when soil is dry to the touch"
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
                "isAvailable": true,
                "name": "Yellow Snake Plant",
                "scientificName": "Sansevieria trifasciata 'Laurentii'",
                "code": "SNKPL",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "snk-s.png",
                        "code": "S",
                        "price": "850",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Stockholm 16",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "16cm x 13cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 45,
                        "weightGrams": 1200,
                        "color": "Green with yellow edges",
                        "lightRequirement": "Low to bright indirect light",
                        "wateringFrequency": "Every 10-14 days"
                    },
                    {
                        "name": "Large",
                        "img": "snk-l.png",
                        "code": "LG",
                        "price": "1400",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam Mini 20",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "20cm x 17.5cm",
                                "potColor": "Pure White"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 76,
                        "weightGrams": 2500,
                        "color": "Green with yellow edges",
                        "lightRequirement": "Low to bright indirect light",
                        "wateringFrequency": "Every 10-14 days"
                    }

                ]
            },
            {
                "isAvailable": true,
                "name": "Fortune Plant",
                "scientificName": "Dracaena fragrans'",
                "code": "FTNPL",
                "sizes": [
                    {
                        "name": "Extra extra small",
                        "img": "ftn-xxs.png",
                        "code": "XXS",
                        "price": "530",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam Mini 13",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "13cm x 11cm",
                                "potColor": "Terra"
                            }
                        ],
                        "tags": "air-purifying",
                        "heightCm": 30,
                        "weightGrams": 1200,
                        "color": "green",
                        "lightRequirement": "Outdoor Shaded ",
                        "wateringFrequency": "Every 10-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Croton",
                "scientificName": "Codiaeum variegatum",
                "code": "CRTN",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "crtn-s.png",
                        "code": "S",
                        "price": "300",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "12cm x 12cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 25,
                        "weightGrams": 100,
                        "color": "Bright green with yellow speckles",
                        "lightRequirement": "Bright, indirect light",
                        "wateringFrequency": "Moderate, once a week"
                    }
                ]
            },
            {

                "isAvailable": true,
                "name": "Butterfly Palm",
                "scientificName": "Dypsis lutescens",
                "code": "BFYPLM",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "btfy-m.png",
                        "code": "MD",
                        "price": "1000",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "25 cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 91,
                        "weightGrams": 1500,
                        "color": "Green",
                        "lightRequirement": "Bright, indirect light",
                        "wateringFrequency": "Every 1-2 weeks, allow soil to dry between waterings"
                    },
                    {
                        "name": "Medium",
                        "img": "btfy-m2.png",
                        "code": "MD",
                        "price": "1200",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "31 cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 152,
                        "weightGrams": 2000,
                        "color": "Green",
                        "lightRequirement": "Bright, indirect light",
                        "wateringFrequency": "Every 1-2 weeks, allow the soil to dry out between waterings"
                    },
                    {
                        "name": "Large",
                        "img": "btfy-l.png",
                        "code": "LG",
                        "price": "4500",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam 40",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "40cm x 35cm",
                                "potColor": "Grey"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 180,
                        "weightGrams": 20000,
                        "color": "Green",
                        "lightRequirement": "Bright, indirect light",
                        "wateringFrequency": "Moderate watering, keep soil slightly moist"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Dracaena Anita",
                "scientificName": "Dracaena deremensis 'Anita'",
                "code": "DRCN",
                "sizes": [
                    {
                        "name": "Large",
                        "img": "d-l1.png",
                        "code": "LG",
                        "price": "1950",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSY-PT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": " 31 cm",
                                "potColor": "Taupe"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 120,
                        "weightGrams": 3000,
                        "color": "green with red edges",
                        "lightRequirement": "bright, indirect light",
                        "wateringFrequency": "once every 1-2 weeks, allow soil to dry out between waterings"
                    },
                    {
                        "name": "Large",
                        "img": "d-l2.png",
                        "code": "LG",
                        "price": "3250",
                        "potDetails": [
                            {
                                "potName": "Ecopots",
                                "potCode": "ECPT",
                                "potType": "Ecopots Amsterdam 30",
                                "potMaterial": "100% recycled materials",
                                "potDimensions": "30cm x 25cm",
                                "potColor": "Taupe"
                            }
                        ],
                        "tags": "Tall",
                        "heightCm": 120,
                        "weightGrams": 3000,
                        "color": "green with red edges",
                        "lightRequirement": "bright, indirect light",
                        "wateringFrequency": "once every 1-2 weeks, allow soil to dry out between waterings"
                    }
                ]
            }
        ]
    },
    {
        "category": "Succulents Plants",
        "img": "scc.png",
        "contents": [
            {
                "isAvailable": true,
                "name": "Echeveria Goldfish",
                "scientificName": "Echeveria 'Goldfish",
                "code": "ECVGDF",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "scc-s.png",
                        "code": "Mini",
                        "price": "120",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "2in diameter",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "echeveria",
                        "heightCm": 5,
                        "weightGrams": 150,
                        "color": "Red pink with green",
                        "lightRequirement": "Semi-shaded",
                        "wateringFrequency": "Once every 10 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Echeveria Linde Anna",
                "scientificName": "Echeveria 'Linde Anna'",
                "code": "ECVLNA",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "linde-anna.png",
                        "code": "Mini",
                        "price": "115",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "2in diameter",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "echeveria",
                        "heightCm": 4.5,
                        "weightGrams": 140,
                        "color": "Pale green with pink edges",
                        "lightRequirement": "Full sun to partial shade",
                        "wateringFrequency": "Once every 7-10 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Sedum Treleasei",
                "scientificName": "Sedum treleasei",
                "code": "SDMTLS",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "sedum-treleasei.png",
                        "code": "Mini",
                        "price": "100",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "2in diameter",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Mini",
                        "heightCm": 6,
                        "weightGrams": 160,
                        "color": "Blue-green",
                        "lightRequirement": "Full sun",
                        "wateringFrequency": "Once every 10-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Echeveria Firely",
                "scientificName": "Echeveria Firely'",
                "code": "ECVFRL",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "Echeveria-Firefly.png",
                        "code": "Mini",
                        "price": "125",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "2in",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "echeveria",
                        "heightCm": 4.8,
                        "weightGrams": 145,
                        "color": "Green with red-orange edges",
                        "lightRequirement": "Bright light, some direct sun",
                        "wateringFrequency": "Once every 8-10 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Pachyphytum 'Apricot Beauty'",
                "scientificName": "Pachyphytum 'Apricot Beauty'",
                "code": "PCHAPB",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "p.png",
                        "code": "Mini",
                        "price": "180",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "2in diameter",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "Rare",
                        "heightCm": 5,
                        "weightGrams": 160,
                        "color": "Pastel pink to apricot",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once every 12 days"
                    },
                    {
                        "name": "Small",
                        "img": "ap-4in.png",
                        "code": "S",
                        "price": "280",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "Rare",
                        "heightCm": 5,
                        "weightGrams": 300,
                        "color": "Pastel pink to apricot",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once every 12 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Aeonium Aquaman",
                "scientificName": "Aeonium hybrid 'Aquaman'",
                "code": "AEAQMN",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "Aeonium-Aquaman.png",
                        "code": "Mini",
                        "price": "99",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "5cm x 5cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 6,
                        "weightGrams": 120,
                        "color": "Green-yellow with pink tips",
                        "lightRequirement": "Bright indirect to full sun",
                        "wateringFrequency": "Every 10-14 days"
                    },
                    {
                        "name": "Small",
                        "img": "aq-4in.png",
                        "code": "S",
                        "price": "199",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "Green"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 12,
                        "weightGrams": 240,
                        "color": "Green with pink tips",
                        "lightRequirement": "Bright indirect to full sun",
                        "wateringFrequency": "Every 10-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "x Pachyveria 'Bubble Candy'",
                "scientificName": "x Pachyveria 'Bubble Candy'",
                "code": "PCHBBL",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "bubble.png",
                        "code": "Mini",
                        "price": "105",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "5cm x 5cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 5,
                        "weightGrams": 110,
                        "color": "Pinkish-lilac",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Every 10-12 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Echeveria Cubic Frost",
                "scientificName": "Echeveria 'Cubic Frost'",
                "code": "ECCFST",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "cubic.png",
                        "code": "Mini",
                        "price": "99",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "5cm x 5cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 5,
                        "weightGrams": 115,
                        "color": "Lavender to pink",
                        "lightRequirement": "Full sun to partial shade",
                        "wateringFrequency": "Every 7-10 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Graptopetalum Rainbow Candy (Rare)",
                "scientificName": "Graptopetalum hybrid 'Rainbow Candy'",
                "code": "GPRBCN",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "candy.png",
                        "code": "Mini",
                        "price": "125",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "5cm x 5cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "rare",
                        "heightCm": 4,
                        "weightGrams": 105,
                        "color": "Pink, yellow, and green hues",
                        "lightRequirement": "Bright light",
                        "wateringFrequency": "Every 10-12 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Echeveria 'Snow Angel'",
                "scientificName": "Echeveria 'Snow Angel'",
                "code": "ECSANG",
                "sizes": [
                    {
                        "name": "2 inch",
                        "img": "echeveria-snow-angel.png",
                        "code": "Mini",
                        "price": "110",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "5cm x 5cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "echeveria",
                        "heightCm": 4.5,
                        "weightGrams": 108,
                        "color": "Pale green to white",
                        "lightRequirement": "Bright indirect sunlight",
                        "wateringFrequency": "Every 10-14 days"
                    }
                ]
            }
        ]
    },
    {
        "category": "Cacti Plants",
        "img": "cacti.png",
        "contents": [
            {
                "isAvailable": true,
                "name": "Bunny Ear Cactus Yellow",
                "scientificName": "Opuntia microdasys var. albispina",
                "code": "BYC-BR",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "cy.png",
                        "code": "S",
                        "price": "150",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "6cm x 6cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 7,
                        "weightGrams": 90,
                        "color": "Yellow-green with yellow glochids",
                        "lightRequirement": "Bright indirect light to full sun",
                        "wateringFrequency": "Once every 10-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Opuntia Monacantha",
                "scientificName": "Opuntia monacantha",
                "code": "OPM",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "o.png",
                        "code": "S",
                        "price": "140",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "6cm x 6cm",
                                "potColor": "Red orange"
                            }
                        ],
                        "tags": "fast growing",
                        "heightCm": 10,
                        "weightGrams": 100,
                        "color": "Green pads with sparse spines",
                        "lightRequirement": "Full sun",
                        "wateringFrequency": "Once every 10 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "White Bunny Ears",
                "scientificName": "Opuntia microdasys var. albata",
                "code": "WBE",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "white.png",
                        "code": "S",
                        "price": "160",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "6cm x 6cm",
                                "potColor": "Red orange"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 8,
                        "weightGrams": 85,
                        "color": "Green pads with white glochids",
                        "lightRequirement": "Bright sunlight",
                        "wateringFrequency": "Once every 12-14 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Ladyfinger Cactus",
                "scientificName": "Mammillaria elongata",
                "code": "LFC",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "ldy.png",
                        "code": "S",
                        "price": "130",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "6cm x 6cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "low maintenance",
                        "heightCm": 6,
                        "weightGrams": 75,
                        "color": "Green stems with golden spines",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once every 10-12 days"
                    }
                ]
            }
        ]
    },
    {
        "category": "Flowering Plants",
        "img": "flw.png",
        "contents": [
            {
                "isAvailable": true,
                "name": "Coral Anthurium",
                "scientificName": "Anthurium andraeanum 'Coral'",
                "code": "CRLANT",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "crl.png",
                        "code": "S",
                        "price": "280",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "9x9 cm",
                                "potColor": "Cream"
                            }
                        ],
                        "tags": "vibrant",
                        "heightCm": 20,
                        "weightGrams": 350,
                        "color": "Coral Pink",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Pink Anthurium",
                "scientificName": "Anthurium andraeanum 'Pink'",
                "code": "PNKANT",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "pnk.png",
                        "code": "S",
                        "price": "290",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "9x9 cm",
                                "potColor": "Taupe"
                            }
                        ],
                        "tags": "vibrant",
                        "heightCm": 22,
                        "weightGrams": 360,
                        "color": "Pink",
                        "lightRequirement": "Filtered light",
                        "wateringFrequency": "Every 5-7 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Petite Pink Orchid",
                "scientificName": "Phalaenopsis 'Petite Pink'",
                "code": "PNKORCH",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "pnk-orch.png",
                        "code": "S",
                        "price": "320",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "8x8 cm",
                                "potColor": "White"
                            }
                        ],
                        "tags": "blooming",
                        "heightCm": 18,
                        "weightGrams": 300,
                        "color": "Soft Pink",
                        "lightRequirement": "Medium indirect light",
                        "wateringFrequency": "Every 6-9 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Red Anthurium",
                "scientificName": "Anthurium andraeanum 'Red'",
                "code": "RDANT",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "rd.png",
                        "code": "S",
                        "price": "275",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "9x9 cm",
                                "potColor": "Cream"
                            }
                        ],
                        "tags": "vibrant",
                        "heightCm": 21,
                        "weightGrams": 355,
                        "color": "Red",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Sunrise Orchid",
                "scientificName": "Phalaenopsis 'Sunrise'",
                "code": "SRSORCH",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "srs.png",
                        "code": "S",
                        "price": "330",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "9x9 cm",
                                "potColor": "Cream"
                            }
                        ],
                        "tags": "vibrant",
                        "heightCm": 19,
                        "weightGrams": 310,
                        "color": "Orange-yellow",
                        "lightRequirement": "Filtered morning light",
                        "wateringFrequency": "Weekly"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Bromeliad Antonio Pink",
                "scientificName": "Guzmania 'Antonio Pink'",
                "code": "BRMLD",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "brm.png",
                        "code": "S",
                        "price": "300",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "8x8 cm",
                                "potColor": "Cream"
                            }
                        ],
                        "tags": "tropical",
                        "heightCm": 23,
                        "weightGrams": 375,
                        "color": "Pink purpple",
                        "lightRequirement": "Bright filtered light",
                        "wateringFrequency": "Water center weekly"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Petite Sunset Orchid",
                "scientificName": "Phalaenopsis 'Petite Sunset'",
                "code": "PTSSORC007",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "pnkorch.png",
                        "code": "S",
                        "price": "335",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "8x8 cm",
                                "potColor": "White"
                            }
                        ],
                        "tags": "vibrant",
                        "heightCm": 20,
                        "weightGrams": 315,
                        "color": "Sunset Orange-Pink",
                        "lightRequirement": "Bright indirect sunlight",
                        "wateringFrequency": "Every 5-8 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "White Orchid",
                "scientificName": "Phalaenopsis amabilis",
                "code": "WHTORCH",
                "sizes": [
                    {
                        "name": "Mini",
                        "img": "orchmini.png",
                        "code": "Mini",
                        "price": "350",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "8cm x 8cm",
                                "potColor": "White"
                            }
                        ],
                        "tags": "Mini",
                        "heightCm": 15,
                        "weightGrams": 200,
                        "color": "White",
                        "lightRequirement": "Filtered light",
                        "wateringFrequency": "Every 7-10 days"
                    },
                    {
                        "name": "Small",
                        "img": "orchwh.png",
                        "code": "S",
                        "price": "450",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "Cream"
                            }
                        ],
                        "tags": "orchid",
                        "heightCm": 25,
                        "weightGrams": 300,
                        "color": "White",
                        "lightRequirement": "Indirect bright light",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Yellow Orchid",
                "scientificName": "Phalaenopsis amabilis",
                "code": "YLWORCH",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "ylworch.png",
                        "code": "S",
                        "price": "380",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "White"
                            }
                        ],
                        "tags": "bright, cheerful, indoor",
                        "heightCm": 18,
                        "weightGrams": 250,
                        "color": "Yellow",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Dark Purple Orchid",
                "scientificName": "Phalaenopsis schilleriana",
                "code": "DKPORCH",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "dporch.png",
                        "code": "S",
                        "price": "420",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "Cream"
                            }
                        ],
                        "tags": "vibrant",
                        "heightCm": 20,
                        "weightGrams": 260,
                        "color": "Dark Purple",
                        "lightRequirement": "Bright indirect light",
                        "wateringFrequency": "Every 5-7 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Double Orchid",
                "scientificName": "Phalaenopsis Hybrid",
                "code": "DBLORCH",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "dbl-sm.png",
                        "code": "S",
                        "price": "500",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "12cm x 12cm",
                                "potColor": "Dark green"
                            }
                        ],
                        "tags": "full bloom",
                        "heightCm": 25,
                        "weightGrams": 300,
                        "color": "Yellow purple",
                        "lightRequirement": "Bright shade",
                        "wateringFrequency": "Every 6 days"
                    },
                    {
                        "name": "Large",
                        "img": "dbl-lg.png",
                        "code": "LG",
                        "price": "820",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "15cm x 15cm",
                                "potColor": "Dark Purple"
                            }
                        ],
                        "tags": "full bloom",
                        "heightCm": 40,
                        "weightGrams": 500,
                        "color": "Dark purple",
                        "lightRequirement": "Bright shade",
                        "wateringFrequency": "Every 5–6 days"
                    }
                ]
            }
        ]
    },
    {
        "category": "Herbs Plants",
        "img": "hrbs.png",
        "contents": [
            {
                "isAvailable": true,
                "name": "Chocolate Mint",
                "scientificName": "Mentha × piperita f. citrata",
                "code": "CHCLTMT",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "chcmt-sm.png",
                        "code": "S",
                        "price": "120",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "4in x 4in",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 20,
                        "weightGrams": 250,
                        "color": "Green",
                        "lightRequirement": "Partial Sun",
                        "wateringFrequency": "2-3 times a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Citronella Grass",
                "scientificName": "Cymbopogon nardus",
                "code": "CTNLL",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "Citronella2.png",
                        "code": "M",
                        "price": "180",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "6in x 6in",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "mosquito-repellent",
                        "heightCm": 45,
                        "weightGrams": 400,
                        "color": "Green",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Every other day"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Citronella Malvarosa",
                "scientificName": "Pelargonium graveolens",
                "code": "CTLLMAL",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "Citronella-Malvarosa.png",
                        "code": "M",
                        "price": "190",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "5in x 5in",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "scented",
                        "heightCm": 40,
                        "weightGrams": 350,
                        "color": "Green",
                        "lightRequirement": "Partial Sun",
                        "wateringFrequency": "2 times a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Dill",
                "scientificName": "Anethum graveolens",
                "code": "DLL",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "Dill.png",
                        "code": "S",
                        "price": "100",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "4in x 4in",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "culinary",
                        "heightCm": 25,
                        "weightGrams": 200,
                        "color": "Light Green",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "3 times a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Gotu-Kola",
                "scientificName": "Centella asiatica",
                "code": "GTKL",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "Gotu-Kola.png",
                        "code": "S",
                        "price": "130",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "4in x 4in",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "medicinal",
                        "heightCm": 15,
                        "weightGrams": 150,
                        "color": "Dark Green",
                        "lightRequirement": "Partial Shade",
                        "wateringFrequency": "Every day"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Green Tea",
                "scientificName": "Camellia sinensis",
                "code": "GRT",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "grnntea.png",
                        "code": "MD",
                        "price": "200",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "6in x 6in",
                                "potColor": "Black Orange"
                            }
                        ],
                        "tags": "antioxidant",
                        "heightCm": 30,
                        "weightGrams": 300,
                        "color": "Green",
                        "lightRequirement": "Partial Shade",
                        "wateringFrequency": "2-3 times a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Lavender",
                "scientificName": "Lavandula angustifolia",
                "code": "LAVND",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "lavender.png",
                        "code": "S",
                        "price": "150",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "4in x 4in",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 20,
                        "weightGrams": 250,
                        "color": "Green with purple flowers",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Once a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Lemon Balm",
                "scientificName": "Melissa officinalis",
                "code": "LMNBLM",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "lemon-balm.png",
                        "code": "S",
                        "price": "140",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "4in x 4in",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "herbal",
                        "heightCm": 22,
                        "weightGrams": 230,
                        "color": "Green",
                        "lightRequirement": "Partial Sun",
                        "wateringFrequency": "2-3 times a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Lemon Mint",
                "scientificName": "Mentha × piperita citrata",
                "code": "LMNMT",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "lemon.png",
                        "code": "S",
                        "price": "120",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "citrus",
                        "heightCm": 20,
                        "weightGrams": 250,
                        "color": "Green",
                        "lightRequirement": "Full Sun to Partial Shade",
                        "wateringFrequency": "Every 2-3 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Parsley",
                "scientificName": "Petroselinum crispum",
                "code": "PRSLY",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "Parsley.png",
                        "code": "MD",
                        "price": "140",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "12cm x 12cm",
                                "potColor": "Orange"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 25,
                        "weightGrams": 300,
                        "color": "Deep Green",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Every 2 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Rosemary",
                "scientificName": "Salvia rosmarinus",
                "code": "RSMRY",
                "sizes": [
                    {
                        "name": "Large",
                        "img": "rosemary.png",
                        "code": "LG",
                        "price": "180",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "15cm x 15cm",
                                "potColor": "Black Orange"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 30,
                        "weightGrams": 400,
                        "color": "Dark Green",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Twice a week"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Sweet Basil",
                "scientificName": "Ocimum basilicum",
                "code": "SWTTBSL",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "sweet-basil.png",
                        "code": "MD",
                        "price": "130",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "12cm x 12cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 22,
                        "weightGrams": 280,
                        "color": "Bright Green",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Every 2 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Thai Basil",
                "scientificName": "Ocimum basilicum var. thyrsiflora",
                "code": "THBSL",
                "sizes": [
                    {
                        "name": "Medium",
                        "img": "thai-basil.png",
                        "code": "MD",
                        "price": "150",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "12cm x 12cm",
                                "potColor": "Black"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 24,
                        "weightGrams": 300,
                        "color": "Green with purple stems",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Every 2 days"
                    }
                ]
            },
            {
                "isAvailable": true,
                "name": "Thyme",
                "scientificName": "Thymus vulgaris",
                "code": "THYM",
                "sizes": [
                    {
                        "name": "Small",
                        "img": "thyme.png",
                        "code": "S",
                        "price": "125",
                        "potDetails": [
                            {
                                "potName": "Nursery Pot",
                                "potCode": "NRSYPT",
                                "potType": "Nursery Pot",
                                "potMaterial": "Plastic",
                                "potDimensions": "10cm x 10cm",
                                "potColor": "Black orange"
                            }
                        ],
                        "tags": "aromatic",
                        "heightCm": 18,
                        "weightGrams": 200,
                        "color": "Gray-Green",
                        "lightRequirement": "Full Sun",
                        "wateringFrequency": "Once a week"
                    }
                ]
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

    plants[categoryIndex].contents.forEach(content => {
        content.sizes.forEach(size => {
            mainContainer.innerHTML += `
                <div class="card plantCard d-flex justify-content-center me-2 my-2">
                    <div onclick="addToReceipt('`+ size.price + `','` + content.code + '-' + size.code + ' ' + size.potDetails[0].potCode + `')" class="plantCard d-flex flex-column align-items-center justify-content-center rounded-4">
                        <img class="plantImg  rounded-4" src="assets/img/`+ size.img + `">
                        <p class="plant mt-2 p-3">`+ content.name + ' ' + size.code + ' in ' + size.potDetails[0].potName + `</p>
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


loadCategories();