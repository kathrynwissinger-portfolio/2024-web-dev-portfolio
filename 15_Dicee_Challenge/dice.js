//variable for random number 1-6 for both sides
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//first dice element
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource ="images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//second dice element
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }