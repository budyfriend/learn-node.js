const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// template engine
app.set('view engine', 'ejs');
// layout ejs express
app.use(expressLayouts);

app.get('/', (req, res) => {
    const mahasiswa = [{
            nama: 'Budiono',
            email: 'budyfriend764@gmail.com'
        },
        {
            nama: 'Rimawati',
            email: 'rsa30007@gmail.com'
        },
        {
            nama: 'Yandes',
            email: 'yandes@gmail.com'
        }
    ]
    res.render('index', {
        layout: 'layouts/main-layout',
        nama: 'Budiono',
        title: 'Halaman Home',
        mahasiswa
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About '
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id}\n Category ID : ${req.query.category}`);
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})