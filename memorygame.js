const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {

    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {

    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}
let card1;
let card2;
let count = 0;
let matchCount = 0;

function handleCardClick(event) {

  console.log("you just clicked", event.target);
  if(count<2){
  let clickedCard = event.target;
  event.target.classList.toggle("clicked"); 
  if (card1 == null) {
    card1 = clickedCard
    count+=1
    return; 
  }
  card2 = clickedCard;
  count+=1


  if (card1.classList[0] === card2.classList[0]) {
    matchCount +=1 
    console.log(matchCount);
    console.log("You have a match!");
    card1 = null;
    card2 = null;
    count = 0;
    return;
  }

setTimeout (function(){
 card1.classList.toggle("clicked"); 
 card2.classList.toggle("clicked"); 
card1 = null;
card2 = null;
count = 0;
},2000)  
}}

createDivsForColors(shuffledColors);
