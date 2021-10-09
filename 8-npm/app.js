const validator = require('validator');
const chalk = require('chalk');
// const val = validator.isEmail('budiono.edu@gmail.com');
// const val = validator.isMobilePhone('083127175528', 'id-ID');
// const val = validator.isNumeric('083127175528', 'id-ID');
// console.log(val);
// console.log(chalk.bold.italic.black.bgBlue('Hello word'));


// Tamplate literal using : ``
const nama = 'Budiono';
const pesan = chalk `Lorem ipsum dolor sit, amet {bgRed.white consectetur} adipisicing elit. {bgBlue.italic.bold Officia}, ea?, nama saya ${nama}`;
console.log(pesan);