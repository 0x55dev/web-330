/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: William Renard
  Date: 4/20/2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 5, isReserved: false},
  { tableNumber: 2, capacity: 10, isReserved: false},
  { tableNumber: 3, capacity: 2, isReserved: true},
  { tableNumber: 4, capacity: 3, isReserved: true},
  { tableNumber: 5, capacity: 4, isReserved: false},
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  for(let i = 0; i < tables.length; i++) { // loop through the tables
    if(tables[i].tableNumber === tableNumber) {  // check each table until we find one that matches the supplied number
      if(tables[i].isReserved) { // if the table is reserved then we're going to immediately call the callback and return out of the function.
        callback("Table is already reserved.");
        return; // return so we do not hit the callback twice
      }
      else { // if table is not reserved then go ahead and reserve it
        tables[i].isReserved = true; // set table to reserved and start the timeout for the callback.
        setTimeout(() => {
          callback("Table is now reserved."); // announce that table is now reserved.
        }, time);
        return;
      }
    }
  }
  callback("No table with that number found."); // if we loop through everything and do not find the table, then we call the callback function
}

function reservationMessage(message)
{
  document.getElementById("message").innerHTML = message;
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // form submission kept refreshing the page. This prevents that from happening
    reserveTable(parseInt(document.getElementById("tableNumber").value), reservationMessage, 1000); // we need to suppy the table number, name does not necessarily matter since it is not being stored anywhere.
  });
