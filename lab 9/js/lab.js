// index.js - Lab 6 - Arrays and Objects
// Author: Samantha Lung
// Date: 05/25/24

//Define variables 
myTransport = ["bus ", "uber ", "walk "];

//Create object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Corolla Hybrid",
  color: "Silver",
  year: 2021,
  age: function () {
      return 2024 - this.year;
  }
}

//Output
document.writeln("Kinds of Transportation I use: " + myTransport + "</br>")
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");