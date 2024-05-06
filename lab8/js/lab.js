// index.js - Lab 8 - Anon Functions
// Author: Samantha Lung
// Date: 05/05/24

//Define an Array
const labArray = [3, 5, 90, 39, 2, 45, 843, 24];

//Multiply by 3 function
function multiplyThree(x) {
  return (x*3);
}

//Make a Map
var labMap = labArray.map(multiplyThree);

//Anonymous Function Callback with Map
labArray.map(function(x){
  return (x*10);
})

//Print out in console
var mapResults = labArray.map(multiplyThree);
console.log("Results: ", labArray)
console.log("Results: ", mapResults)
console.log("Results: ", labArray.map(function(x){
  return (x*10);
}))

//Print out on site
var mapResults = 
  "Original array: " + "[" + labArray + "]" + "</br>" +
  "Multiplied by 3: " + "[" + labArray.map(multiplyThree) + "]" + "</br>" +
  "Multiplied by 10" + "[" + labArray.map(function(x){return (x*10);}) + "]"

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);