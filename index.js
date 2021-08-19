const express = require('express')
const app = express()
const port = 500

app.get('/tintuc', (req, res) => {
  return res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})