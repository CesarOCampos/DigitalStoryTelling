const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')


const app = express()

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log("Server started")
})

app.use('/', express.static('views'))

app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'))