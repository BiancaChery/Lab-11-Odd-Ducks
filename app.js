"use strict";

let bag = document.getElementById("clicker-bag")

function handleBagClick(event) {
    event.preventDefault();
    let target = event.target;
    target.style.backgroundColor = "teal";
}
bag.addEventListener("click", handleBagClick);

let banana = document.getElementById("clicker-banana");

function handleBananaClick(event) {
    event.preventDefault();
    let target = event.target;
    target.style.backgroundColor = "cyan";
}
banana.addEventListener("click", handleBananaClick);

let bathroom = document.getElementById("clicker-bathroom")

function handleBathroomClick(event) {
    event.preventDefault();
    let target = event.target;
    target.style.backgroundColor = "goldenrod yellow";
}
bathroom.addEventListener("click", handleBathroomClick);