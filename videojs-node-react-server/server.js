const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file (React app)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to serve video files
app.use('/video', express.static(path.join(__dirname, 'public', 'video')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
