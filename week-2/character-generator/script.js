/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: William Renard
  Date: 3/28/2024
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {

  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // Got Form Values
  let nameField = document.getElementById("heroName");
  let genderSelect = document.getElementById("heroGender");
  let classSelect = document.getElementById("heroClass");

    // get the label elements for the character information
    let nameLabel = document.getElementById("nameLabel");
    let classLabel = document.getElementById("classLabel");
    let genderLabel = document.getElementById("genderLabel");

  //Create the character
  const character = createCharacter(nameField.value, genderSelect.value, classSelect.value);

  nameLabel.textContent = character.getName();
  genderLabel.textContent = character.getGender();
  classLabel.textContent = character.getClass();

  // hide the form, show the values of the newly created character.
  document.getElementById("characterForm").classList.add("hidden");
  document.getElementById("characterOutput").classList.add("visible");
  document.getElementById("characterOutput").classList.remove("hidden");
  // TODO: Display character information
  // think I might hide the create form and then show the character output div.

});