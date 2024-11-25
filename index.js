const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/db");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
