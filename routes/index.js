// Login, Register, View Videos Page, Watch Video, Save Video Timestamps, Search for Videos, Admin Account


const express = require('express')
router = express.Router()
const {ensureAuthenticated} = require('../config/auth')
const mongoose = require('mongoose')
const User = require('../models/User')



router.get("/", (req,res) => {
	res.render('index')
})



router.get('/profile',ensureAuthenticated, (req, res) => {
	// res.render('profile', {
	// 	name: req.user.name,
	// 	email: req.user.email,
	// })
	res.render('profile')
})


router.get('/videos',ensureAuthenticated, (req, res) => {
	let allvideos = req.user.myvideos
	res.render('videos', {videos: allvideos})
})

router.get('/videos/:videoname', ensureAuthenticated, (req,res) => {
	// Videoname is part of req object
	// console.log(req.params.videoname)
	vidname = req.params.videoname

	console.log(vidname)
	console.log(req.user)
	// console.log("The videoname is : " + req.user.videos[0][String(vidname)])
	let vidstart = 0;

	if(req.user.videos.length > 0){
			if(req.user.videos[0][vidname]){
				let vidarry = String(req.user.videos[0][vidname])
				vidstart = vidarry.split(".")[0]
			}else{
				vidstart = 0;
			}
	}else{
		vidstart = 0;
	}

	console.log(vidstart)

	if(vidname == "video1"){
		res.render('videopage', {heading: vidname, videolink: `https://www.youtube.com/embed/f4q1RHCkYyg`, time: vidstart})
	}else if(vidname == "video2"){
		res.render('videopage', {heading: vidname, videolink: "https://www.youtube.com/embed/JOQpuR-3GMQ", time: vidstart})
	}else if(vidname == "video3"){
		res.render('videopage', {heading: vidname, videolink: "https://www.youtube.com/watch?v=5fDdWR4e80", time: vidstart})
	}else if(vidname == "video4"){
		res.render('videopage', {heading: vidname, videolink: "https://www.youtube.com/embed/6FOq4cUdH8k", time: vidstart})
	}else{

	// Vidname is the route

	let allvideos = req.user.myvideos //User can see these videos, array with objects

	let vidlink = ''

	allvideos.forEach((data) => {
		if(data.name == vidname){
			vidlink = data.link
		}
	})

	res.render('videopage', {heading: vidname, videolink: vidlink, time: vidstart}) //Embedded Link
}
})

router.post('/save', (req,res) => {

	let latesttime = 0;

	if(req.body.content.length == 0){
		console.log(req.body.content[0])
		latesttime = req.body.content[0]
	}else{
		console.log(req.body.content[req.body.content.length-1])
		latesttime = req.body.content[req.body.content.length-1]
	}

	let vidtimes = []	
	vidtimes.push({video1: 0, video2: 0, video3: 0, video4: 0})

	let videonum = req.body.name

	if(req.user.videos.length == 0){ //If we do not have any items in array we make and push newest time

		let vid = String(videonum)
	vidtimes[0][vid] = latesttime
	console.log(vidtimes)

		User.findOneAndUpdate({email: req.user.email}, {videos: vidtimes}, (err,doc) => {
			console.log("Updated Document")
		})

	}else{ //If we have array we update the object

		let newvid = req.user.videos;

		// User.findOne({email: req.user.email}, (err, user) => {
		// 	newvid = req.user.videos
		// 	console.log(newvid)
		// })

		// console.log(typeof newvid)
		// console.log(newvid.length)
		// newvid[0][videonum] = latesttime
		console.log(typeof videonum)
		console.log(latesttime)
		let vid = String(videonum)
		console.log(newvid[0][vid])
		newvid[0][vid] = latesttime;

		console.log(newvid)

		User.findOneAndUpdate({email: req.user.email}, {videos: newvid}, (err,doc) => {
			console.log("Updated Document")
		})

	}
	
	// User.findOneAndUpdate({email: req.user.email}, {"$set": {'videos.$.video1': latesttime}}, (err,doc) => {
	// 	console.log("Updated Document")
	// })	

	// User.findOne({email: req.user.email}, (err, user) => {
	// 	console.log("New Document :" + user)
	// })

	res.send("asdjke")
})


router.get('/admin', ensureAuthenticated, (req,res) => {
	if(req.user.email == "admin@gmail.com"){
		let viewable = req.user.myvideos
			User.find({}, (err, result) => {
		    if (err) {
		      console.log(err);
		    } else {
		     res.render('admin', {stat: result, videotable: viewable})
		    }
		  });
	}else{
		res.redirect("/users/login")
	}
})

router.post('/admin/new',  (req, res) => {

	let uservids = req.user.myvideos //Get videolinks
	// let timestamps = req.user.videos
	let allvideos = [...uservids] //All videos


	let newvideo = {
		name: req.body.videoname,
		link: 'https://www.youtube.com/embed/' + req.body.videolink,
		title: req.body.title
	}

	allvideos.push(newvideo)

	User.updateMany({}, {myvideos: allvideos}, (err, doc) => {
		console.log("Updated Document")
	})


	res.redirect('/admin')
})

router.post('/admin/delete',  (req, res) => {

	let del = req.body.deletevideo

	let uservids = req.user.myvideos //Get videolinks
	let allvideos = [...uservids] //All videos

	allvideos = allvideos.filter(function( obj ) {
  return obj.name !== del;
});

	User.updateMany({}, {myvideos: allvideos}, (err, doc) => {
		console.log("Updated Document")
	})

		res.redirect('/admin')
})


module.exports = router