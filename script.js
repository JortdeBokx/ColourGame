/**
 * Created by Jort on 09/06/2017.
 */

var colouredBoxes = document.getElementsByClassName("colourbox");
var levelDisplay = document.getElementById("level");

var level = 1;
var correctBox = 0;
var chosenColour = []; //array of [R,G,B] values


init();


function init() {
    //initialises the playing field
    correctBox = Math.floor((Math.random() * 6));
    levelDisplay.textContent = String(level);
    colourBoxes();
}

function colourBoxes(){
    //loops through all boxes, giving the different one a slightly different colour than the rest.
    //deviance to other boxes dependant on the current level
    //level 1-5: change all 3 colour values, deviance = + or - random between 10/level and 15/level
    //level 6-10: change, randomly, 2 of the colour values
    //level 10-20: change, randomly, 1 of the colour values

    generateRandomColour();

    for(var i = 0; i < colouredBoxes.length; i++){
        if(i === correctBox){
            //change colour slightly depending on rules
        }
        else {
            colouredBoxes[i].style.background = getColourStyle(chosenColour);
        }
    }



}

function generateRandomColour(){
    //have minimum value 70 because dark background
    var r = Math.floor((Math.random() * 256) + 70);
    var g = Math.floor((Math.random() * 256) + 70);
    var b = Math.floor((Math.random() * 256) + 70);
    chosenColour = [r,g,b];
}

function getColourStyle(colour){
    return "rgb(" + colour[0] + "," + colour[1] + "," + colour[2] + ")";
}