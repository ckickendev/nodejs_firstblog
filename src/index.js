const express = require('express');
const path = require('path');
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const port = 500

const route = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')))

//http logger
// app.use(morgan('combined'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//engine handle bars
app.engine('handlebars', handlebars({
  extname: '.handlebars'
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

//route
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})