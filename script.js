'use strict'
const searchBtn = document.getElementById('searchButton');
const resultContainer = document.getElementById('results');
const apikey = "f4c009ac";

const getMovie = function () {

    const movieInput = document.getElementById('searchInput').value;
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${movieInput}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                let hasSeasons
                if (data.Type === "series") {
                    hasSeasons = `
                    Type: ${data.Type}<br>
                    Seasons: ${data.totalSeasons}
                    `
                }
                else {
                    hasSeasons = `
                    Type: ${data.Type}
                    `
                }
                resultContainer.innerHTML = `<div class="movieData">
                Title: ${data.Title}<br>
                Plot: ${data.Plot}<br>
                Rating: ${data.imdbRating}<br>
                Actors: ${data.Actors}<br>
                Year: ${data.Year}<br>
                Genre: ${data.Genre}<br>
                ${hasSeasons}
                </div>`;
            }
            else {
                resultContainer.innerHTML = `<h2>
                 Oops!, ${data.Error}
                </h2>`;
                console.log(data)
            }
        })
}