// console.log('Hello Word');
const cetakNama = (nama) => `Hai nama saya ${nama}`;
const PI = 3.14;
const mahasiswa = {
    nama: 'Budiono',
    umur: 20,
    // standar
    // cetakMhs: function() {
    // }
    // ero function
    // cetakMhs: () =>{
    // }
    // es6 notation
    cetakMhs() {
        return `Hello nama saya ${this.nama} dan umur ${this.umur} tahun.`;
    }

}

class Orang {
    constructor() {
        console.log('Object orang telah dibuat');
    }
}
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// };

// ES6
module.exports = { cetakNama, PI, mahasiswa, Orang };