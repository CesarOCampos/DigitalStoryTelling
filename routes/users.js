const express = require('express')


router = express.Router()

router.get('/login', (req, res) => {
	res.render('login')
})

router.post('/login', (req,res) => {
	console.log(req.body)
	res.send("test")
})

module.exports = router