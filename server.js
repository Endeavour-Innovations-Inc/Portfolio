const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Explicit route for root "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

// Explicit route for /software-engineering
app.get('/software-engineering', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'software-engineering.html'));
});

// If you have other pages, you can define routes for them similarly.

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
