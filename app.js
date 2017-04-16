const express = require("express")
const bodyParser = require("body-parser")
const mysql = require('mysql')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

const db = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "marwek",
	database : "sample"
})

const Book = require('./book')
const book = new Book(db)

app.get('/book',book.getBook)
app.get('/book/:id',book.getBookById)
app.post('/book',book.storeBook)
app.put('/book/:id',book.updateBook)
app.delete('/book/:id',book.deleteBook)

app.listen(8080,() => {
	console.log("Listening on localhost:8080")
})
