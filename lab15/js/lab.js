// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// const URL = "https://icanhazdadjoke.com/";

// $("#my-button").click(function() {
//   $.ajax(ajaxObj);
// })

// const ajaxObj = {
//   url: URL,
//   type: "GET",
//   dataType: "json",
//   success: ajaxSuccess,
//   error: ajaxError
// }

// function ajaxSuccess(data) {
//   const joke = data.joke;
//   $("#output").html(joke);

// }

// function ajaxError(request,error){
//   console.log("Oops:", request, error);
// }
const API_ENDPOINT = 'https://yesno.wtf/api';

const showAnswer= (answer) => {
  document.querySelector('#output').innerHTML = `<p>${answer}</p>`
};

const fetchAnswer = () => {
  fetch(API_ENDPOINT)
    .then(data => data.json())
    .then(data => showAnswer(data.answer));
};

document.querySelector('#my-button').addEventListener('click', () => {
  //console.log('Clicked');
  fetchAnswer();
})
  