const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const morgan = require("morgan");
app.use(morgan("dev"));
// Define a BASE_URL that includes the API_KEY:
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`;

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params; // Destructure city from req.params
  const queryString = `&q=${city}`; // Create a queryString using city
  const apiRes = await fetch(BASE_URL + queryString); // Make the fetch request
  const data = await apiRes.json(); // Parse the response
  res.json(data); // Respond to the request with the data
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
