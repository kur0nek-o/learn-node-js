const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About This Page'
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});