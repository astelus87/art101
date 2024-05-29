// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  console.log("Click")
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has put you in the house of " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
