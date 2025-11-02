import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'My brother'];
let action = ['ate', 'peed', 'crushed', 'broke', 'attacked'];
let what = ['my homework', 'my phone', 'the car', 'my computer'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying', 'while I was gaming'];

function getRandomNumber(x, y) {
  return Math.floor(Math.random() * (y - x) + x);
}

function getRandom(anyArray){
  let max = anyArray.length;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
};
