const express = require('express');
const path = require('path');
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const port = 500

app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))


//engine handle bars
app.engine('handlebars', handlebars({
  extname: '.handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/home', (req, res) => {
  res.render('home'); 
})

app.get('/news', (req, res) => {
  res.render('news'); 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})