const express = require('express')
const cors = require('cors')
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:example@localhost:5432/postgres')
const app = express()

const getUsers = async () => {
  return await db.any('SELECT * FROM users');
}

app.use(cors())

// We fetched data from this array before we had database connection
//const usernames = ["Mert", "Narmin", "Barış", "Akhlitdin", "Barjunaid", "Aswathi", "Surumi", "Aslam", "Tofi"]

app.get('/usernames', async (req, res) => {
  const users = await getUsers();
  res.send(users);
})

app.listen(3001)