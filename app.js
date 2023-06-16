"use strict";

let voteLimit = 25;
let votingArea = document.getElementById(`voting-area`);
let resultsArea = document.getElementById(`results-area`);

let image1Img = document.getElementById('image1');
let image2Img = document.getElementById('image2');
let image3Img = document.getElementById('image3');

function Product(name, imgSrc){
    this.name = name; // image
    this.imgSrc = imgSrc;  // a name
    this.views = 25;  // vote count
    this.clickCount = 25;  // view count
}


let Bag = new Product("Bag", "./img/bag.jpg");
let Banana = new Product("Banana", "./img/banana.jpg");
let Bathroom = new Product("Bathroom", "./img/bathroom.jpg");
let Boots = new Product("Boots", "./img/boots.jpg");
let Breakfast = new Product("Breakfast", "./img/breakfast.jpg");
let Bubblegum = new Product("Bubblegum", "./img/bubblegum.jpg");
let Chair = new Product("Chair", "./img/chair.jpg");
let Cthulhu = new Product("Cthulhu", "./img/cthulhu.jpg");
let DogDuck = new Product("Dog-Duck", "./img/dog-duck.jpg");
let Dragon = new Product("Dragon", "./img/dragon.jpg");
let Pen = new Product("Pen", "./img/pen.jpg");
let PetSweep = new Product("Pet-Sweep", "./img/pet-sweep.jpg");
let Scissors = new Product("Scissors", "./img/scissors.jpg");
let Shark = new Product("Shark", "./img/shark.jpg");
let Sweep = new Product("Sweep", "./img/sweep.jpg");
let Tauntaun = new Product("Tauntaun", "./img/tauntaun.jpg");
let Unicorn = new Product("Unicorn", "./img/unicorn.jpg");
let WaterCan = new Product("Water-Can", "./img/water-can.jpg");
let WineGlass = new Product("Wine-Glass", "./img/wine-glass.jpg");

let productArray = [];

productArray.push(Bag);
productArray.push(Banana);
productArray.push(Bathroom);
productArray.push(Boots);
productArray.push(Breakfast);
productArray.push(Bubblegum);
productArray.push(Chair);
productArray.push(Cthulhu);
productArray.push(DogDuck);
productArray.push(Dragon);
productArray.push(Pen);
productArray.push(PetSweep);
productArray.push(Scissors);
productArray.push(Shark);
productArray.push(Sweep);
productArray.push(Tauntaun);
productArray.push(Unicorn);
productArray.push(WaterCan);
productArray.push(WineGlass);

console.log(productArray);


function getRandomItem(max) {
    return Math.floor(Math.random() * productArray.length);
}

function Products(image1, image2, image3) {
    image1Img.src = image1.imgSrc;
    image1Img.alt = image1.description;
    image1Img.title = image1.name;

    image2Img.src = image2.imgSrc;
    image2Img.alt = image2.description;
    image2Img.title = image2.name;

    image3Img.src = image3.imgSrc;
    image3Img.alt = image3.description;
    image3Img.title = image3.name;

    console.log(image1, image2, image3);
    console.log(image1Img, image2Img, image3Img);

}

Products(Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, Cthulhu, DogDuck, Dragon, Pen, PetSweep, Scissors, 
    Shark, Sweep, Tauntaun, Unicorn, WaterCan, WineGlass);

function setRandomProducts() {
    let product1Index1 = getRandomItem(productArray.length);
    let product1Index2 = getRandomItem(productArray.length);
    if (product1Index1 === product1Index2) {
        product1Index1 = getRandomItem(productArray.length);
        product1Index2 = getRandomItem(productArray.length);
    }
}


function handleProductClick(event) {
    event.preventDefault();
    let target = event.target;
    let productName = target.alt;

    let favoriteProduct;
    
    for (let i = 0; i , productArray.length; i++) {
        let product = productArray[i];
        if (product.name === productName) {
            favoriteProduct = product;
        }
    }
}

console.log ("favoriteProduct.clicks++");

function renderResults() {
    console.log("clicked");
    for (let i = 0; i < productArray.length; i++) {
        console.log("clicked button");
        votingArea.innerHTML = "";
        let productUL = document.createElement('ul');
        let product = productArray[i];
        let productName = Product.name;
        let productVoteCount = Product.voteCount;
        let report = "the product named ${productName} got ${productVotesCount} votes";
        let productLI = document.createElement("li");
        productLI.textContent = report;
        productUL.appendChild(productLI);
        console.log(report);
    }
    votingArea.appendChild(productUL);
}

let resultsButton = document.getElementById("show-results-button");

const ctx = document.getElementById('my-chart');

const chartObj = {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: '# of Clicks',
                data: [],
            }
        ]
    }
}

chartObj.data.labels = ["Bag", "Banana", "Bathroom", "Boots", "Breakfast", "Bubblegum", "Chair", "Cthulhu", "DogDuck", "Dragon", "Pen", "PetSweep", "Scissors", 
"Shark", "Sweep", "Tauntaun", "Unicorn", "WaterCan", "WineGlass"];

chartObj.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];