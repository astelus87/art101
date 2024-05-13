// index.js - Lab 9 - Libraries & jQUery
// Author: Samantha Lung
// Date: 05/13/24

// add button to challenge section
$("#challenge").append("<button id='buttonChallenge'>Press Me</button>");

// add a click listener to the challenge button
$("#buttonChallenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});


