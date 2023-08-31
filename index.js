// for player 1 dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "dice" + randomNumber1 + ".png" ; // dice1.png - dice6.png

var randomImagesSource = "images/" + randomDiceImages; // image/dice1.png - image/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

//for player2 dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}