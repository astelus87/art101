// index.js - Lab 11 JS 
// Author: Samantha Lung
// Date: May 19th, 2024

// Constants

// Functions

// Sorts the characters of a string in random order.
function anaString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort(function(){return 0.5-Math.random()}).join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  // now let's sort it
  userNameSorted = anaString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submitSort").click(function(){
  // get value of input field
  const userName = $("#user-nameSort").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#outputSort").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});