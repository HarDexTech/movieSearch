'use strict'
const searchBtn = document.getElementById('searchButton');
const resultContainer = document.getElementById('results');
const apikey = "f4c009ac";

const getMovie = function () {

    const movieInput = document.getElementById('searchInput').value;
    if (movieInput.length === 0) {
        resultContainer.innerHTML = `<h2>
        Please enter a movie name
       </h2>`;
        return;
    }
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
            else {
                resultContainer.innerHTML = `<h2>
                 Oops!, ${data.Error}
                </h2>`;
                console.log(data)
            }
        })
}

document.querySelector('body').addEventListener('keydown', enterSearch);

function enterSearch(e) {
    if (e.key === 'Enter') {
        getMovie();
    }
}