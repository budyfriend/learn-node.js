// node menganut module, jika dijalankan fun yang di luar
// tidak akan terhubung langsung ke index kecuali di module.exports terlebih dahulu
// contoh module.exports = cetakNama; dan di index require di jadikan var untuk bisa ditangkap

// console.log('Budyfriend');
// const nama = 'Budiono';
// const cetakNama = (nama) => `Hai nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs'); //core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); //third party module / npm module

const coba = require('./coba');

console.log(coba.cetakNama('Budiono'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());