"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: William Renard
      Date: 4/6/2024

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

riderName.innerHTML = sessionStorage.getItem("riderName", riderName.value);
ageGroup.innerHTML = sessionStorage.getItem("ageGroup", ageGroup.value);
bikeOption.innerHTML = sessionStorage.getItem("bikeOption", bikeOption.value);
routeOption.innerHTML = sessionStorage.getItem("routeOption", routeOption.value);
accOption.innerHTML = sessionStorage.getItem("accOption", accOption.value);
region.innerHTML = sessionStorage.getItem("region", region.value);
miles.innerHTML = sessionStorage.getItem("miles", miles.value);
comments.innerHTML = sessionStorage.getItem("comments", comments.value);

