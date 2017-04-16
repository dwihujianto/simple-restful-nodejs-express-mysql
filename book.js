function book(mysql) {
	this.getBook = (req,res) => {
		mysql.query(`SELECT * FROM books`,(err, rows, fields) => {
			if (err) throw err

			res.json(rows)
		})	
	}

	this.getBookById = (req, res) => {
		mysql.query(`SELECT * FROM books WHERE id = ${req.params.id}`,(err, row , fields ) => {
			if (err) {
				console.error(err)
			}

			res.json(row)
		})
	}

	this.storeBook = (req,res) => {
		const data = {
			title:req.body.title,
			author:req.body.author,
			description:req.body.description
		}

		mysql.query(`INSERT INTO books SET ?`,data,(err,result) => {
			if (err) throw err
				
			res.json(data)
		})

	}

	this.updateBook = (req,res) => {
		const data = {
			title:req.body.title,
			author:req.body.author,
			description:req.body.description
		}

		mysql.query(`UPDATE books SET ? WHERE ?`,[data,{id:req.params.id}],(err,result) => {
			if (err) throw err
				
			res.json(data)
		})		
	}

	this.deleteBook = (req,res) => {

		mysql.query(`DELETE FROM books WHERE ?`,{id:req.params.id},(err,result) => {
			if (err) throw err

			res.json({msg:"Data has been deleted"})
		})
	}

}

module.exports = book
