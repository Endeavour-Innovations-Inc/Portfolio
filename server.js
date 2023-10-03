const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Using EJS for demonstration purposes
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/software-engineering', (req, res) => {
    res.render('software-engineering');
});

app.get('/hardware-engineering', (req, res) => {
    res.render('hardware-engineering');
});

app.get('/electrical-engineering', (req, res) => {
    res.render('electrical-engineering');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
