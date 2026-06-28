const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

app.get("/", (req, res) => {
  res.send("GitHub Profile Analyzer API is running...");
});

module.exports = app;