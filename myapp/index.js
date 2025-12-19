// 2.0 Created a server
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
