const express = require("express");
const cors=require("cors")
const dbConnect = require("../src/config/db");

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Cointab Assignment API Active");
});

app.listen(PORT, async () => {
  await dbConnect()
  console.log(`server started at http://localhost:${PORT}`);
});
