const { Client } = require("pg");
const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

const connectionString =
  "postgresql://postgres:password@localhost:5432/employee";
const client = new Client({
  connectionString: connectionString,
});
client.connect();
// const query = client.query("Select * from people limit 5");
app.get("/", (req, res) => {
  client.query("SELECT * FROM people LIMIT 5", (err, result) => {
    res.send(result);
  });
});

app.listen(8080, () => console.log("Listening ... 8080"));
