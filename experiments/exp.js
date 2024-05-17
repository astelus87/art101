function getNameandDisplay() {
    let name = prompt("Name please:");
    $('#title').html('Hello ' + name);
}

$("#my-button").click(getNameandDisplay);

// test to see if button is working, displays click in console when clicked.
// $("#my-button").click(function(){
//     console.log("Click")
// });
