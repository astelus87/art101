// index.js - Lab 7 Functions
// Author: Samantha Lung
// Date: 05/02/24

// declare a variable userName and use window.prompt() to get the user's name from the user
// sort the letters of the user's name and return those from the function
// make sure your function uses return to return the results
// neatly output the user's sorted name

function sortUserName () {
  const userName = window.prompt("What's your name?");
  return userName.split('').random().join('');
}

document.writeln("Fixed your name! : ",
  sortUserName(), "</br>")
