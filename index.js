var randomnum1 = Math.floor(Math.random() * 6) + 1;

var ranIma = "dice" + randomnum1 + ".png";
var randImage = "images/" + ranIma;

document.querySelectorAll("img")[0].setAttribute("src",randImage);


var randomnum2 = Math.floor(Math.random() * 6) + 1;

var ranIma2 = "dice" + randomnum2 + ".png";
var randImage2 = "images/" + ranIma2;

document.querySelectorAll("img")[1].setAttribute("src",randImage2);

if(randImage > randImage2){document.querySelector("h1").innerHTML = "Player 1 wins!🚩";}
else if(randImage2 > randImage){document.querySelector("h1").innerHTML = "Player 2 wins!🚩🚩";}
else{document.querySelector("h1").innerHTML = "It a Draw 🚦";}

function playGame() {
    //reload the full page
    location.reload(true);
}

