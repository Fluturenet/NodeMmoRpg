var express = require("express")
var redis = require("redis")

var db = require("./libs/database")

db.set(redis.createClient(7777))

var app = express()

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

var User = require("./models/userModule")
var user = new User()

user.findId(1,(err,data)=>{
    console.log(data)
})
app.listen(3000)
