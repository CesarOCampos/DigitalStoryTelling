const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


// User Model
const User = require('../models/User')


module.exports = function(passport) {
	passport.use(
		new LocalStrategy({
			usernameField: 'email',
			passReqToCallback: true,
		}, (req, email, password, done) => {
			// Match User
			User.findOne({
				email: email
			})
			.then(user => {
				if(!user){
					return done(null, false, req.flash('loginMessage', 'No User For this Email'));
					console.log("Email not in use")
				}

				// Match Password

				bcrypt.compare(password, user.password, (err, isMatch) => {
					if(err) throw err;

					if(isMatch){
						return done(null, user)
					} else{
						return done(null, false, req.flash('loginMessage', 'Wrong Password'))
						console.log("Email not in use")
					}
				})
			})
			.catch(err => console.log("Error :" + err))
		})
		)

	passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});	
}