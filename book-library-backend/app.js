const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Load JSON data
const dataPath = path.join(__dirname, 'data.json');
let jsonData = { books: [] };

fs.readFile(dataPath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading JSON data:", err);
    process.exit(1);
  } else {
    jsonData = JSON.parse(data);
  }
});

// Define root route
app.get('/', (req, res) => {
  res.send('Welcome to the Book Library API');
});

// API endpoint to get all books
app.get('/api/books', (req, res) => {
  res.json(jsonData.books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
