"use strict";
//dom elements
const searchBtn = document.getElementById("searchButton");
const resultContainer = document.getElementById("results");
const apikey = APIKEY.apiKey;

const getMovie = function () {
  const movieInput = document.getElementById("searchInput").value; //get input
  if (movieInput.length === 0) {
    resultContainer.innerHTML = `<h2>
        Please enter a movie name
       </h2>`;
    return; //stop if input is empty
  }

  // get data from api
  fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${movieInput}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        createOutput(data);
      } else {
        resultContainer.innerHTML = `<h2>
                 Oops!, ${data.Error}
                </h2>`;
        console.log(data);
      }
    })
    .catch((error) => {
      resultContainer.innerHTML = `<h2>
        Oops!, something went wrong
       </h2>`;
      console.log("Error fetching data:", error);
    });
};

//enter to search functionality
function enterSearch(e) {
  if (e.key === "Enter") {
    getMovie();
  }
}
document.querySelector("input").addEventListener("keydown", enterSearch);

//build html from data
function createOutput(data) {
  let hasSeasons;
  if (data.Type === "series") {
    hasSeasons = `
                    Type: ${data.Type}<br>
                    Seasons: ${data.totalSeasons}
                    `;
  } else {
    hasSeasons = `
                    Type: ${data.Type}
                    `;
  }
  resultContainer.innerHTML = `<div class="movieData">
                <div>Title: ${data.Title}</div>
                <div>Plot: ${data.Plot}</div>
                <div>Rating: ${data.imdbRating}</div>
                <div>Actors: ${data.Actors}</div>
                <div>Year: ${data.Year}</div>
                <div>Genre: ${data.Genre}</div>
                <div>${hasSeasons}</div>
                <div><img src="${data.Poster}" alt="Movie Poster"></div>             
                </div>`;
}
