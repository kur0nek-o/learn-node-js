const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');

// mysql connection config
const config = require('./config/db');
const mysql = require('mysql');
const pool = mysql.createPool(config);

// express initialize
const app = express();
const port = 3000;

// template engine config
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.use(expressLayouts);

// session and connect-flash config
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

// express default middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Beranda',
        active: 'beranda'
    })
});

app.get('/daftar-orang', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query('SELECT * FROM `daftar-orang`', (error, results) => {
            if (error) throw err;

            res.render('orang/daftar_orang', {
                title: 'Daftar Orang',
                active: 'daftar-orang',
                data: results,
                msg: req.flash('message')
            });
        });

        connection.release();
    });
});

app.get('/daftar-orang/add', (req, res) => {
    res.render('orang/daftar_orang_add', {
        title: 'Tambah Orang',
        active: 'daftar-orang'
    });
});

app.post('/store', (req, res) => {
    const data = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query('INSERT INTO `daftar-orang` SET ?', data, (error, results) => {
            if (error) throw error;

            req.flash('message', 'Data Orang berhasil disimpan!');
            res.redirect('/daftar-orang');
        });

        connection.release();
    });
});

app.get('/delete/:id', (req, res) => {

});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Tentang web',
        active: 'tentang'
    });
});

app.use((req, res) => {
    res.status(404).send('Not Found!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});