const express = require('express')
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact')

const app = express();
const port = 3000;

// Setup ejs
// template engine
app.set('view engine', 'ejs');
// layout ejs express
// Third-party middleware
app.use(expressLayouts);

// Build-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Halaman Home
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

// Halaman about
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About '
    });
});

// Halaman contact
app.get('/contact', async (req, res) => {
    // Contact.find().then((contact) => {
    //     res.send(contact)
    // })

    // await itu menunggu delu sebelum prosesnya selesai dan menggunakan async
    const contacts = await Contact.find();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts,
        msg: req.flash('msg')
    });
});


// halaman detail contact
app.get('/contact/:nama', async (req, res) => {
    // const contact = findContact(req.params.nama);

    const contact = await Contact.findOne({nama : req.params.nama});
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact
    });
});

app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`)
})