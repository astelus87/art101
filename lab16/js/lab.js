// index.js - Lab 16 JSON & APIs
// Author: Samantha Lung
// Date: June 6th


var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: ourURL,
      type: "GET",
  })
  // Request Succeeds 
  .done(function(data) {
      var imageUrl = data.img;
      var title = data.title;
      console.log("orig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var alt = data.alt;
      console.log("orig alt:", alt);
      alt = make_safe(alt);
      console.log("safe alt:", alt);
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      $("#output").html(html);
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })

  // Request Fails
  .fail(function(){
    console.log("Save me please oh god");
    console.log("Oh dear god why");
  })

}

getComic();
