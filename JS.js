/**
 * Created by alyssa.prah123 on 11/1/16.
 */

function random () {
    //variables
    var colors = ['AZURE', 'CHARTREUSE', 'CORNSILK', 'LAVENDER',
        'OLIVE', 'ORCHID', 'PERU', 'TOMATO', 'WHEAT'];

    var userco = document.getElementById("input").value.toUpperCase();
    var rando = colors[Math.floor(Math.random() * 9)];




    if (userco == rando) {
        alert("You're correct!");


    }
   else if (userco > rando) {
       alert("Incorrect!    Your color is higher than the color I'm thinking!");
   }
   else if (userco < rando) {
       alert("Incorrect! Your color is lower than the color I'm thinking!");
   }
     else if (userco !== rando) {
         alert ("I do not recognize this color.");
    }

    //Step 6: Alert the user of success or failure.  Change background color IF success.



}