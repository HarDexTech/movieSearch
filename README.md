# Movie Search App

A simple and elegant web application for searching movies and TV series information using the OMDb API.

## Features

- **Search Movies & Series**: Search for any movie or TV series by title
- **Detailed Information**: View comprehensive details including:
  - Title
  - Plot summary
  - IMDB Rating
  - Cast/Actors
  - Release Year
  - Genre
  - Type (Movie or Series)
  - Number of seasons (for TV series)
  - Movie poster image
- **Keyboard Support**: Press Enter to search without clicking the button
- **Error Handling**: User-friendly error messages for invalid searches
- **Responsive Design**: Clean and modern UI with smooth animations

## Project Structure

```
movieSearch/
├── index.html      # HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and layout
└── config.js       # Configuration file (API settings)
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection to fetch movie data from OMDb API

### Installation

1. Clone or download this project
2. Open `index.html` in your web browser

That's it! No installation or dependencies needed.

## Usage

1. Enter a movie or TV series title in the search box
2. Click the "Search" button or press Enter on your keyboard
3. View the detailed information about the movie/series
4. The poster image will be displayed at the bottom of the results

## API

This application uses the **OMDb API** (Open Movie Database) to fetch movie information.

- **API Base URL**: `https://www.omdbapi.com/`
- **Authentication**: API key is required
- **Data Returned**: Title, plot, rating, actors, year, genre, type, and poster image

## Technologies Used

- **HTML5**: Document structure
- **CSS3**: Styling with CSS variables and flexbox
- **JavaScript (ES6+)**: DOM manipulation and API calls
- **OMDb API**: Movie data source

## Styling Highlights

- Modern serif font (DM Serif Text)
- Custom CSS variables for easy theme customization
- Smooth transitions and hover effects
- Flexible and responsive layout
- Dark green color scheme (#324134)

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Opera (Latest)

## Future Enhancements

- Search multiple movies and compare
- Save favorite movies
- Advanced filtering options (by year, genre, rating)
- Pagination for search results
- Dark/Light theme toggle

## License

Feel free to use this project for learning and personal projects.

## Author

Created by HarDexTech
