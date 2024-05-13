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

// add button to problem section
$("#problems").append("<button id='buttonProblems'>Press Me</button>");

// add a click listener to the problem button
$("#buttonProblems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});

// add button to problem section
$("#reflections").append("<button id='buttonReflections'>Press Me</button>");

// add a click listener to the problem button
$("#buttonReflections").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#reflections").toggleClass("special");
});

// add button to problem section
$("#results").append("<button id='buttonResults'>Press Me</button>");

// add a click listener to the problem button
$("#buttonResults").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});