const express = require("express");
require("dotenv").config()
const app = express();
const PORT=process.env.PORT;


app.get("/api/", (req, res) => {
  res.send(`<h1>hell0 javascript</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
