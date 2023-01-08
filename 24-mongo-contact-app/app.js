const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult, check} = require('express-validator')

const session = require('express-session');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');
const methodOverride = require('method-override');

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

// Setup method-override
app.use(methodOverride('_method'))

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

// halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout',
    })
});


// proses tambah data contact
app.post('/contact', [
    body('nama').custom(async (value) => {
        const duplicate = await Contact.findOne({nama: value});
        if (duplicate) {
            throw new Error('Nama kontak sudah digunakan');
        }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No HP tidak valid').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array()
        });
    } else {
        Contact.insertMany(req.body, (error, result) => {
            // kirimkan flash message
            req.flash('msg', 'Data contact berhasil ditambahkan!');
            res.redirect('/contact');
        })
    }
});

// proses delete contact
// app.get('/contact/delete/:nama', async (req, res) => {
//     const contact = await Contact.findOne({nama: req.params.nama})
//     // jika contact tidak ada
//     if (!contact) {
//         res.status(404);
//         res.send('<h1>404</h1>');
//     } else {
//         Contact.deleteOne({ _id: contact._id }).then((result) => {
//             req.flash('msg', 'Data contact berhasil dihapus!');
//             res.redirect('/contact');
//         })
        
//     }
// })
app.delete('/contact', (req, res) => {
    Contact.deleteOne({ nama: req.body.nama }).then((result) => {
        req.flash('msg', 'Data contact berhasil dihapus!');
        res.redirect('/contact');
    })
})

// proses ubah data
app.put('/contact', [
    body('nama').custom(async (value, { req }) => {
        const duplicate = await Contact.findOne({nama : value})
        if (value !== req.body.oldNama && duplicate) {
            throw new Error('Nama kontak sudah digunakan');
        }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No HP tidak valid').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        res.render('edit-contact', {
            title: 'Form Ubah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array(),
            contact: req.body
        });
    } else {
        Contact.updateOne(
            {_id: req.body._id}, 
            {
                $set: {
                    nama: req.body.nama,
                    email: req.body.email,
                    nohp: req.body.nohp
                }
            }
        ).then((result) => {
            // kirimkan flash message
            req.flash('msg', 'Data contact berhasil diubah!');
            res.redirect('/contact');
        })
    }
});


// halaman form ubah data contact
app.get('/contact/edit/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama})

    res.render('edit-contact', {
        title: 'Form Ubah Data Contact',
        layout: 'layouts/main-layout',
        contact,
    })
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