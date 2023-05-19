const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const options = {
        root: __dirname,
        headers: {
            'Content-Type': 'text/html'
        }
    };
    
    var fileName = './pages/index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/about', (req, res) => {
    const options = {
        root: __dirname,
        headers: {
            'Content-Type': 'text/html'
        }
    };
    
    var fileName = './pages/about.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});