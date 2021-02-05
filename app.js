const express = require('express')



const app = express()


app.use(express.urlencoded({ extended: false}))

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log("Server started")
})

app.get('/', (req,res) => {
	res.send("Hello World!")
})