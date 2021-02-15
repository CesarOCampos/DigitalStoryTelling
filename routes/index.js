const express = require('express')

router = express.Router()

const {ensureAuthenticated} = require('../config/auth')

router.get("/", (req,res) => {
	res.render('welcome')
})

router.get('/homepage',ensureAuthenticated, (req, res) => {
	res.render('homepage', {
		name: req.user.name,
		email: req.user.email,
	})
})

module.exports = router