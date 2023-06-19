require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(express.json())
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/items', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'items.html'))
});

app.get('/items/new', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'new.html'))
});

app.post('/items/new',async (req, res) => {
  const itemName = req.body.itemName;
  const itemType = req.query.type;
  try {
    // make request
    const response = await axios.get(`https://api.themoviedb.org/3/search/${itemType}`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: itemName,
      },
    });
    const suggestedTitles = response.data.results.map((item) => ({
      title: item.title,
      poster: item.poster_path,
    }));
    res.send(suggestedTitles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred during request');
  
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
