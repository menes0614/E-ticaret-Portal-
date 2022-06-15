const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const mongoose = require('mongoose');
const port = 5000
const hostname = '127.0.0.1';
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1/IsTech_db');

app.use(express.static('public'))


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main')
const users = require('./routes/users')

app.use('/', main)
app.use('/', users)

app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
  })