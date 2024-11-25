const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const connectDB = require("./src/db");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", adminRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
