
var grow = 3;

var growElement = document.querySelector("#grow");

console.log(growElement);

function add1() {
    grow++;
    growElement.innerText = grow + " like(s)";
    console.log(grow);
}