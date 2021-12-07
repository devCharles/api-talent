const express = require('express')

const port = process.env.PORT || '8080'

const app = express()


app.get('/', (req, res) => {
  res.json({
    message: 'APIv1'
  })
})

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})

module.exports = app
