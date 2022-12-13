const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyparser = require("body-parser");
require("dotenv").config();
const pool = require("./db");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

const dir = path.join(__dirname, "./dist");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(dir));
}

app.post("/api/create", createValues);
app.get("/api/request", getValues);

async function createValues(req, res) {
  const { temperature, altitude, dewpoint, pressure, rain,humidity } = req.body;
  console.log(req.body);
  const time = Date.now();
  const values = [temperature, time, altitude, dewpoint, pressure, rain,humidity];
  try {
    const result = await pool.query(
      `INSERT INTO weather(temperature,time,altitude,dew_point,pressure,rain,humidity) VALUES($1,to_timestamp($2/1000.0),$3,$4,$5,$6,$7)`,
      values
    );
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  }
}

async function getValues(req, res) {
  const result = await pool
    .query("SELECT * FROM weather ORDER BY id DESC LIMIT 1")
    .then((data) => res.json(data.rows))
    .catch((err) => console.log("data not present", err));
}

app.listen(PORT, () => {
  console.log(`connected in ${PORT}`);
});
