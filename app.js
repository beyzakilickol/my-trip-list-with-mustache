const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const PORT = 3005
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')
app.use('/css',express.static('css'))
app.use(bodyParser.urlencoded({ extended: false }))
//-----------------------------------------------
let tripList = []

app.get('/', function(req,res){
  res.redirect('/trips')
})
app.get('/trips',function(req,res){
  res.render("trips", {tripList:tripList})
})
app.get('/add_trips',function(req,res){
  res.render("add_trips")
})
app.post('/add_trips',function(req,res){
let tripLocation = req.body.tripLocation
let dateOfDeparture = req.body.dateOfDeparture
let dateOfReturn = req.body.dateOfReturn
let tripImage = req.body.tripImage
let trip = {destination: tripLocation, departureDate: dateOfDeparture, returnDate:dateOfReturn, image:tripImage}
tripList.push(trip)
  res.redirect("/trips")
})













app.listen(PORT,function(){
  console.log("Server is running...")
})
