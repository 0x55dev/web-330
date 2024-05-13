/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: William Renard
  Date: 5/12/2024
  Filename: script.js
*/

"use strict";

// get all the page elements we need
const movieTitle = document.getElementById("movie-title");
const movieDirector = document.getElementById("movie-director");
const movieYear = document.getElementById("movie-year");
const movieSynopsis = document.getElementById("movie-synopsis");
const movieError = document.getElementById("error-message");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title: "The Godfather",
    director: "Francis Coppola",
    year: 1972,
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    synopsis: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    synopsis: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    // Simulate network request delay with setTimeout
    setTimeout(() => {
      const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie); // Resolve the Promise with the movie object if found
      } else {
        reject(new Error('Movie not found')); // Reject the Promise if movie not found
      }
    }, 1000); // Simulate 1 second delay
  });
}

async function displayMovie(title)
{
  try {
    const movie = await fetchMovie(title); // await while we fetch the movie from the list
    movieTitle.innerHTML = movie.title; // update the text related to the movie.
    movieDirector.innerHTML = movie.director;
    movieYear.innerHTML = movie.year;
    movieSynopsis.innerHTML = movie.synopsis;
    movieError.innerHTML = "";
  } catch(error) {
    movieTitle.innerHTML = "";
    movieDirector.innerHTML = "";
    movieYear.innerHTML = "";
    movieSynopsis.innerHTML = "";
    movieError.innerHTML = error; // display the error
    console.log("error!", error); // log an error if needed
  }
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault(); // Prevent form submission/page reload
  const titleInput = document.querySelector("#title-input"); // gets the title input so we can pass the value to the async function
  const title = titleInput.value.trim();
  await displayMovie(title); // await the async function before moving on.
});