"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: William Renard
      Date: 5/18/2024

      Filename: project12-03.js
*/

$(document).ready(function() {
  // Apply the click() method to the article > h2 selector
  $('article > h2').click(function(event) {

      var heading = $(event.currentTarget); // get the target from the click event
      // that way we can get the list below whether the child is ul or ol depending on which button we pressed.

      // get the list depending on which h2 we clicked.
      var list = heading.next('ul, ol'); // next because it's the next sibling
      var headingImage = heading.children('img'); // Get the img within the h2

      list.slideToggle(500); // Slide out the list or slide back in over half a second.
      var src = headingImage.attr('src'); // Get the value of the src attribute

      if (src === 'plus.png') { // if it's a plus then we're going to set it to a minus
          headingImage.attr('src', 'minus.png'); // set the image to the minus
      } else { // otherwise set it back to a plus
          headingImage.attr('src', 'plus.png'); // else set it back to a plus
      }
  });
});