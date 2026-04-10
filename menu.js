const menuContainer = document.getElementById("menuContainer");
let menuRows = [];
let menuItems = [];
let menuTitles = [];
let menuPrices = [];
let menuImages = [];
let menuButtons = [];
let currentRow = 0;
menuRows[currentRow] = document.createElement("div");
menuRows[currentRow].className = "row";
menuContainer.appendChild(menuRows[currentRow]);

const products = [
    {name:"Choco Sprinkle", img:"Media Files/cupcake_1.webp", imgAlt:"Image of a chocolate sprinkle cupcake", price:"5.99"},
    {name:"Choco Creme", img:"Media Files/cupcake_2.webp", imgAlt:"Image of a chocolate cream cupcake", price:"5.99"},
    {name:"Pumpkin Spice", img:"Media Files/cupcake_3.webp", imgAlt:"Image of a pumpkin spice cupcake", price:"8.99"},
    {name:"Chocolate Chip", img:"Media Files/cupcake_4.webp", imgAlt:"Image of a chocolate chip cupcake", price:"4.99"},
    {name:"Raspberry", img:"Media Files/cupcake_5.webp", imgAlt:"Image of a raspberry cupcake", price:"6.99"},
    {name:"Marshmallow Creme", img:"Media Files/cupcake_6.webp", imgAlt:"Image of a marshmallow cream cupcake", price:"5.99"},
    {name:"Peppermint Crunch", img:"Media Files/cupcake_7.webp", imgAlt:"Image of a peppermint cupcake with a snowflake decoration", price:"9.99"},
    {name:"Chocolate Swirl", img:"Media Files/cupcake_8.webp", imgAlt:"Image of a chocolate swirl cupcake", price:"5.99"},
    {name:"Double Chocolate", img:"Media Files/cupcake_9.webp", imgAlt:"Image of a double chocolate cupcake", price:"6.99"},
    {name:"Carrot Cake", img:"Media Files/cupcake_10.webp", imgAlt:"Image of a carrot cupcake", price:"5.99"},
    {name:"Wildberry", img:"Media Files/cupcake_11.webp", imgAlt:"Image of a wildberry cupcake", price:"8.99"},
    {name:"Mini-Cake", img:"Media Files/cupcake_12.webp", imgAlt:"Image of many small cupcakes", price:"3.99"}
];

for(let i = 0; i < products.length; i++){
    if(i % 4 == 0 && i != 0){
        currentRow++;
        menuRows[currentRow] = document.createElement("div");
        menuRows[currentRow].className = "row";
        menuContainer.appendChild(menuRows[currentRow]);
    }
    
    menuItems[i] = document.createElement("div");
    menuItems[i].className = "pastryItem col-sm";
    menuImages[i] = document.createElement("img");
    menuImages[i].src = products[i].img;
    menuImages[i].alt = products[i].imgAlt;
    menuImages[i].className = "pastryImage";
    menuItems[i].appendChild(menuImages[i]);

    menuTitles[i] = document.createElement("span");
    menuTitles[i].innerText = products[i].name;
    menuTitles[i].className = "pastryName";
    menuItems[i].appendChild(menuTitles[i]);

    menuPrices[i] = document.createElement("span");
    menuPrices[i].innerText =`$${products[i].price}`;
    menuPrices[i].className = "pastryPrice";
    menuItems[i].appendChild(menuPrices[i]);

    menuButtons[i] = document.createElement("span");
    menuButtons[i].innerText = "ADD TO CART";
    menuButtons[i].className = "pastryButton";
    menuItems[i].appendChild(menuButtons[i]);

    menuRows[currentRow].appendChild(menuItems[i]);
}