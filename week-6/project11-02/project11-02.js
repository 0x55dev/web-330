"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: William Renard
      Date: 4/26/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  let codeValue = postalCode.value; // setup variables and retrieve the values from the inputs which will go inside of the fetch request.
  let countryValue = country.value;
  place.value = ""; // clear out any inputs.
  region.value = "";

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`, {
    method: "GET", // fetch and use template literal to place values inside of the url.
  }).then(response => { // setup promise
    if(response.ok) { // check if the fetch went through correctly
      return response.json(); // return the json response
    }
  }).then(data => { // now to manipualte the data
    // after looking at the json structure for whatever reason the place name and state abbreviation are inside of an array so we have to access it like below.
    place.value = data.places[0]["place name"]; // from my experience it always returns an array of just 1 item so get array index 0 and then get place name
    region.value = data.places[0]["state abbreviation"]; // set the values
  }).catch((error) => { // if theres an error log it.
    console.log(error);
  });
};



