const express = require("express")
const app = new express()
const path = require("path")
const hbs = require('hbs')
const { error } = require("console")
const user = require('./routes/user')
const admin = require('./routes/admin')

const connectDB = require('./config/dbconfig');


connectDB();
app.set('view engine',"hbs")
app.set('views',path.join(__dirname,'pages'))

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extented:true}))
app.use(express.json())


app.use('/', user)
app.use('/admin', admin)



app.listen(3000)