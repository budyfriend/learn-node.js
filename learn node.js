REPL - Node.js
--------------
node (untuk menjalankan REPL)
const nama = 'Budiono';
const umur = 23;
const sayHello = (nama,umur)=>{
console.log(`Hai, nama saya ${nama}, saya ${umur} tahun.`);
}
(membuat variabel dan ero function pada REPL)
.help (bantuan mengunakan REPL pada node.js)
.load coba.js (untuk meload/menjalankan data/variabel/function pada file coba.js)
.berak / .clear (untuk mengakhiri ketika buntu/mengakhiri dalam membuat function)
.editor (merubah data didalam REPL ctrl+D untuk menyimpan, ctrl+C untuk cancel)

Terminal
-----------
touch coba.js (membuat file coba.js)
vi coba.js (berubah data tanpa mengunakan code editor)
	i (insert mode pada vi)
	esc + :wq (keluar dari vi)


jenis modules pada node
1. Core modules
2. Local modules
3. Third party modules
(ketiganya dalam pembuatan/pemanggilan rekomendasi harus berurutan juga)

//Install package npm
npm i validator
npm install validator
npm i validator@13.6.0
npm uninstall validator

npm i chalk
sudo npm i -g nodemon@2.0.7 (global)
npm i --save-dev nodemon@2.0.7 (local)

//sebelum mengirim data post pastikan sudah memasukan build in midleware
app.use(express.urlencoded());

penggunaan express-validator
-------------------------
untuk mengcustomisasi message error meggunakan check jika tidak menggunakan body
-check
contoh:
 check('email', 'Email tidak valid').isEmail()
-body
contoh:
 body('email').isEmail()
 
 //untuk menambahkan flash message session
 //memerlukan module diantaranya
const session = require('express-session');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');


Shell Mongodb
-------------------
show dbs = show databases
use test = use database/create database
db.createCollection('mahasiswa') = create table/collection
show collections = show table/collections
db.mahasiswa.insertOne({nama: "Budiono", email: "budiono.edu@gmail.com"}) = insert table/collection only one
db.mahasiswa.find() = show data in table
db.mahasiswa.insertMany([
    {nama: "Haris", email: "haris@gmail.com"},
    {nama: "Miftah", email: "miftah@gmail.com"}
]) = insert db more than one


Atlas
--------------
database user using a username and password
username : budyfriend
password : yNoYjD3gpXWtG0SJ

connection
shell   : mongo "mongodb+srv://cluster0.fxi1fxv.mongodb.net/myFirstDatabase" --username budyfriend
compase : mongodb+srv://budyfriend:yNoYjD3gpXWtG0SJ@cluster0.fxi1fxv.mongodb.net/test





