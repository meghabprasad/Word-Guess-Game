// theme: nba teams, desserts, countries, tv shows, colors, friends characters 
// create array of word options "Algeria, America, Australia, Brazil"
// create a counter called wins set to 0 
// create a counter called loses set to 0
// create a counter for guessRemaining and set it to 5;
// create an array that has the lettersGuessed 
// for the length of the word, create _ at each index (loop)
// display this ___ 
// get user guess 
    // onkeyup and save this key 
    // compare this key with the letters of the word 
    // if that letter exists, replace _ with the letter 
    // push the letter to the lettersGuessed array
// display the incomplete word __y_

var wordOptions = ["Algeria", "America", "Australia", "Brazil", "Mexico"];
var wins = 0;
var loses = 0;
var guessesRemaining = 5;
var lettersGuessed = [];
var wordSelected;
var dashes;
var emptyWord;
//press any key to get started 
document.onkeyup = function (event){
    wordSelected = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //selects a word from the list
    console.log("Word selected is: " + wordSelected); //displays word in console
    for (var i = 0; i < wordSelected.length; i++){
        // wordSelected[i] = "_ "
        dashes = dashes + "_ "
        document.getElementById("wordSelected").textContent = dashes;
    }    
}