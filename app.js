const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const usernames = ["Mert", "Narmin", "Barış", "Akhlitdin", "Barjunaid", "Aswathi", "Surumi", "Aslam", "Tofi"]

app.get('/usernames', function (req, res) {
  res.send(usernames)
})

app.listen(3001)