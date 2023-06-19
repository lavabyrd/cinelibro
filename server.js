
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const site_files = 'pages';
// Serve static files from the "public" folder
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, site_files, 'index.html'));
});


app.get('/items', (req, res) => {
  res.sendFile(path.join(__dirname, site_files, 'items.html'))
});

app.get('/items/new', (req, res) => {
  res.send('This is for adding a new item');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
