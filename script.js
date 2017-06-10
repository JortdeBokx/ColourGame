/**
 * Created by Jort on 09/06/2017.
 */

var colouredBoxes = document.getElementsByClassName("colourbox");
var levelDisplay = document.getElementById("level");
var highscoreDisplay = document.getElementById("highscore");

var level = 1;
var highscore = 0;
var correctBox = 0;
var chosenColour = []; //array of [R,G,B] values


init();


function init() {
    //initialises the playing field
    level = 1;
    highscore = 0;
    correctBox = Math.floor((Math.random() * 6));
    levelDisplay.textContent = String(level);
    highscoreDisplay.textContent = String(highscore);
    initBoxes();
    colourBoxes();

}

function resetToLevel1(){
    level = 1;
    correctBox = Math.floor((Math.random() * 6));
    levelDisplay.textContent = String(level);
    highscoreDisplay.textContent = String(highscore);
    colourBoxes();
}

function resetNextLevel(){
    correctBox = Math.floor((Math.random() * 6));
    levelDisplay.textContent = String(level);
    highscoreDisplay.textContent = String(highscore);
    colourBoxes();
}

function colourBoxes(){
    //loops through all boxes, giving the different one a slightly different colour than the rest.
    //deviance to other boxes depending on the current level


    generateRandomColour();

    for(var i = 0; i < colouredBoxes.length; i++){
        if(i === correctBox){
            var diffColour = calculateDiffcolour();
            colouredBoxes[i].style.background = getColourStyle(diffColour);
        }
        else {
            colouredBoxes[i].style.background = getColourStyle(chosenColour);
        }
    }



}
function calculateDiffcolour() {
    var b1 = 50 / (level /10);
    var b2 = 50 / (level);
    var b3 = b2 - b1;
    var Deviance = Math.floor((Math.random() * b3) + b1);
    var random_boolean = Math.random() >= 0.5;
    var colourToChange =  Math.floor((Math.random() * 3));

    var r = chosenColour[0];
    var g = chosenColour[1];
    var b = chosenColour[2];

    if(colourToChange === 0){
        //change red
        if (random_boolean) {
            r += Deviance;
        } else {
            r -= Deviance;
        }

    }else if(colourToChange === 1){
        //change green
        if (random_boolean) {
            g += Deviance;
        } else {
            g -= Deviance;
        }

    }else{
        //change blue
        if (random_boolean) {
            b += Deviance;
        } else {
            b -= Deviance;
        }
    }

    return [r,g,b];
}

function generateRandomColour(){
    //have minimum value 70 because dark background
    var r = Math.floor((Math.random() * 126) + 70);
    var g = Math.floor((Math.random() * 126) + 70);
    var b = Math.floor((Math.random() * 126) + 70);
    chosenColour = [r,g,b];
}

function getColourStyle(colour){
    return "rgb(" + colour[0] + "," + colour[1] + "," + colour[2] + ")";
}

function initBoxes() {
    for (var i = 0; i < colouredBoxes.length; i++) {
        colouredBoxes[i].addEventListener("click", function() {
            if (this.getAttribute("id") === "colourbox" + String(correctBox)) {
                level += 1;
                if(highscore < level){
                    highscore = level - 1;
                }
                resetNextLevel();
            }
            else{
                if(highscore < level){
                    highscore =  level - 1;
                }
                resetToLevel1();
            }

        });
    }
}
