const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true // auto create index in document
});



// // Menambah 1 data
// const contact1 = new Contact({
//     nama : 'Hari',
//     nohp : '085156981234',
//     email: 'Serang-Banten'
// });

// // Simpan ke collection
// contact1.save()
// .then((contact) => {
//     console.log(contact)
// })
