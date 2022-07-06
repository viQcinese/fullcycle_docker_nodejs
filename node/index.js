const express = require("express")
const {faker} = require("@faker-js/faker")
const mysql = require('mysql')

const app = express()

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const connection = mysql.createConnection(config)

app.get("/", (req, res) => {
  const inserQuery = `INSERT INTO people(name) values('${faker.name.firstName()}')`
  const selectQuery = `SELECT * FROM people limit 10;`
  connection.query(inserQuery)

  connection.query(selectQuery, function (error, results) {
    if (error) throw error;
    const names = results.map(person => `<p>${person.name}</p>`).join("")

    res.send(`<h1>Hello, World!</h1>${names}`)
  });
})

app.listen(3000, () => console.log("Listening on port 3000..."))