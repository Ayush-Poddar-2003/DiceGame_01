// Generating random numbers from 1 - 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// storing address of image in new variable
var randomImageSource = "images/dice"+randomNumber1+".png";

// trigger 1st img element and setting image src as address stored in above variable
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);;

//SAME FOR DICE 2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//---------LOGIC-------------

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
