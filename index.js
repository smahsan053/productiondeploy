const express = require("express");
require("dotenv").config();
// import express from "express";
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("itzahsan053");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai Aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Exaple app listening on port ${process.env.PORT}`);
});
