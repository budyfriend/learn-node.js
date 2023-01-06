const { MongoClient, ObjectID } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'test'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if(error) return console.log('Koneksi gagal!');

    // pilih database
    const db = client.db(dbName)

    // menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne({
    //     nama : "galih",
    //     email : "galih@gmail.com"
    // }, (error, result) => {
    //     if(error) return console.log('Gagal menambahkan data!');
    //     console.log(result);
    // })

    // meambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: "ibro",
    //         email : "ibro@gmail.com"
    //     },
    //     {
    //         nama : "bachtiar",
    //         email : "bachtiar@gmail.com"
    //     }
    // ], (error, result) => {
    //     if(error) return console.log('data gagal ditambahkan!')
    //     console.log(result)
    // })

    // menampilkan semua data di yang ada di collection table mahasiswa
    // const list = db.collection('mahasiswa').find();
    // list.toArray((error, result) => {
    //     console.log(result)
    // })

    // menampilkan data berdasarkan kriteria di collection table mahasiswa
    // const list = db.collection('mahasiswa').find(
    //     {_id: ObjectID('63b6ea33bf1dc300d36281d2')}
    // );
    // list.toArray((error, result) => {
    //     console.log(result)
    // })

    // mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {_id: ObjectID('63b6e85cdbc29124b2a10399')},
    //     {
    //         $set: {nama: 'Maniss'}
    //     }
    // )

    // updatePromise.then((result) => console.log(result))
    // .catch((error) => console.log(error))

    // mengubah data lebih dari 1, berdasarkan kriteria 
    // const updatePromise = db.collection('mahasiswa').updateMany(
    //     {nama: 'Maniss'},
    //     {
    //         $set: {nama: 'Misiss'}
    //     }
    // )
    // updatePromise.then((result) => console.log(result))
    // .catch((error) => console.log(error))

    // menghapus 1 data
    // db.collection('mahasiswa').deleteOne({
    //     _id : ObjectID('63b6e93ddbc29124b2a1039b')
    // }).then((result) => console.log(result))
    // .catch((error) => console.log(error))

    // menghapus lebih dari 1 data
    db.collection('mahasiswa').deleteMany({
        nama : 'Misiss'
    }).then((result) => console.log(result))
    .catch((error) => console.log(error))
})