// Create web server

// Load modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const comments = require('./comments.json');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Post comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
        if (err) {
            res.status(500).send('Server error');
            return;
        }
        res.status(201).send('Success');
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});