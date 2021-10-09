const yargs = require('yargs');
const contacts = require('./contacts');
// yargs.command('add', 'Menambahkan contact baru', () => {}, (argv) => {
//     console.log(argv.nama)
// });

yargs.command({
    command: 'add',
    describe: 'Manambahkan contact baru',
    builder: {
        nama: {
            discribe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        },
        email: {
            discribe: "Email",
            demandOption: false,
            type: 'string'
        },
        noHP: {
            discribe: "Nomor Handphone",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.saveContact(argv.nama, argv.email, argv.noHP);
    }
}).demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no hp contact',
    handler() {
        contacts.listContact();
    }
})

// menampilkan detail semua kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            discribe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
})

// menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            discribe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
})

yargs.parse();