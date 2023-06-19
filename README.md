
# Cinelibro

Cinelibro is a web application for tracking movies and TV shows that you watch and read. It provides a user-friendly interface for adding new items and keeps a record of the titles you've watched or read.

## Features

- Add movies and TV shows to your watchlist or reading list
- Look up titles using the TMDB API
- Display suggested titles with their posters
- Choose between movies, TV shows, or both for searching

## Technologies Used

- Frontend: HTML, CSS, JavaScript (with Bootstrap for styling)
- Backend: Node.js with Express framework
- External APIs: TMDB API

## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
cd cinelibro
npm install
```

3. Set up environment variables:

   - Create a `.env` file in the project root directory.
   - Add your TMDB API key in the `.env` file:

   ```
   TMDB_API_KEY=YOUR_API_KEY
   ```

4. Start the server:

```
npm start
```

5. Open the web application in your browser:

```
http://localhost:3000
```

## Usage

- Enter the name of a movie or TV show in the search box.
- Select the item type (movie, TV show, or both) using the radio buttons.
- Click the "Search" button to look up the item.
- The suggested titles will be displayed with their posters.
- You can add the suggested titles to your watchlist or reading list.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

